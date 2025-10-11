-- Create uuid generation extension for Prisma defaults
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "users_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "users_email_key" UNIQUE ("email")
);

CREATE TYPE "EventType" AS ENUM ('point', 'trip');

CREATE TABLE "events" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "type" "EventType" NOT NULL,
    "lon" DOUBLE PRECISION NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "altitude" DOUBLE PRECISION,
    "timestamp" TIMESTAMP(3) WITH TIME ZONE NOT NULL,
    "trail" JSONB NOT NULL,
    CONSTRAINT "events_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "events_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "events_timestamp_idx" ON "events" ("timestamp");

CREATE TABLE "timeline_states" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "current_time" TIMESTAMP(3) WITH TIME ZONE NOT NULL,
    "speed" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "playing" BOOLEAN NOT NULL DEFAULT TRUE,
    CONSTRAINT "timeline_states_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "timeline_states_user_id_key" UNIQUE ("user_id"),
    CONSTRAINT "timeline_states_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
