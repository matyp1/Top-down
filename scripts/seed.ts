import 'dotenv/config';
import { faker } from '@faker-js/faker';
import { insertEvent, prisma, EventType, TrailPoint, updateTimelineState } from '../src/db.js';

const TEST_USER_EMAIL = 'pilot@example.com';
const EVENT_COUNT = 20;

function buildTrail(type: EventType, origin: { lon: number; lat: number }): TrailPoint[] {
  if (type === EventType.point) {
    const altitude = faker.number.float({ min: 0, max: 5000, precision: 0.1 });
    return [[origin.lon, origin.lat, altitude]];
  }

  const segments = faker.number.int({ min: 3, max: 8 });
  const baseAltitude = faker.number.float({ min: 0, max: 4000, precision: 0.1 });
  const trail: TrailPoint[] = [];

  for (let i = 0; i < segments; i++) {
    const lonOffset = faker.number.float({ min: -0.05, max: 0.05, precision: 0.0001 });
    const latOffset = faker.number.float({ min: -0.05, max: 0.05, precision: 0.0001 });
    const altitudeOffset = faker.number.float({ min: -200, max: 200, precision: 0.1 });

    trail.push([
      origin.lon + lonOffset,
      origin.lat + latOffset,
      baseAltitude + altitudeOffset,
    ]);
  }

  return trail;
}

async function seed() {
  const user = await prisma.user.upsert({
    where: { email: TEST_USER_EMAIL },
    update: {},
    create: {
      email: TEST_USER_EMAIL,
    },
  });

  await prisma.event.deleteMany({ where: { userId: user.id } });

  const now = new Date();
  const startTime = new Date(now.getTime() - 1000 * 60 * 60 * 24 * 3);

  for (let i = 0; i < EVENT_COUNT; i++) {
    const type = i % 3 === 0 ? EventType.trip : EventType.point;
    const lon = parseFloat(faker.location.longitude());
    const lat = parseFloat(faker.location.latitude());
    const altitude = type === EventType.point
      ? faker.number.float({ min: 0, max: 5000, precision: 0.1 })
      : null;
    const timestamp = new Date(startTime.getTime() + faker.number.int({ min: 0, max: now.getTime() - startTime.getTime() }));
    const trail = buildTrail(type, { lon, lat });

    await insertEvent({
      userId: user.id,
      type,
      lon,
      lat,
      altitude,
      timestamp,
      trail,
    });
  }

  await updateTimelineState(user.id, {
    currentTime: now,
    speed: 1.0,
    playing: true,
  });

  console.log(`Seeded ${EVENT_COUNT} events for ${TEST_USER_EMAIL}.`);
}

seed()
  .catch((error) => {
    console.error('Failed to seed database:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
