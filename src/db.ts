import 'dotenv/config';
import { PrismaClient, EventType, Prisma } from '@prisma/client';

export type TrailPoint = [number, number, number?];

export interface EventInput {
  id?: string;
  userId: string;
  type: EventType;
  lon: number;
  lat: number;
  altitude?: number | null;
  timestamp: Date;
  trail: TrailPoint[];
}

export interface TimelineStateUpdate {
  currentTime?: Date;
  speed?: number;
  playing?: boolean;
}

const prisma = new PrismaClient();

function toJsonArray(trail: TrailPoint[]): Prisma.JsonArray {
  return trail.map((point) => point as unknown as Prisma.JsonValue) as Prisma.JsonArray;
}

export async function insertEvent(event: EventInput) {
  return prisma.event.create({
    data: {
      id: event.id,
      userId: event.userId,
      type: event.type,
      lon: event.lon,
      lat: event.lat,
      altitude: event.altitude ?? null,
      timestamp: event.timestamp,
      trail: toJsonArray(event.trail),
    },
  });
}

export async function getEventsSince(since: Date) {
  return prisma.event.findMany({
    where: {
      timestamp: {
        gte: since,
      },
    },
    orderBy: {
      timestamp: 'asc',
    },
  });
}

export async function updateTimelineState(userId: string, state: TimelineStateUpdate) {
  const data = {
    currentTime: state.currentTime ?? new Date(),
    speed: state.speed ?? 1.0,
    playing: state.playing ?? true,
  };

  return prisma.timelineState.upsert({
    where: { userId },
    update: data,
    create: {
      userId,
      ...data,
    },
  });
}

export { prisma, EventType };
