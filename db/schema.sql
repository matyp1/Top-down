-- Faction Flow Society Engine schema
-- These tables are the stone tablets of our digital society simulator.

CREATE TABLE IF NOT EXISTS factions (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    motto TEXT,
    daily_score NUMERIC DEFAULT 0
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    faction_id INTEGER REFERENCES factions(id),
    profile_json JSONB DEFAULT '{}'::jsonb
);

CREATE TABLE IF NOT EXISTS polls (
    id SERIAL PRIMARY KEY,
    question_text TEXT NOT NULL,
    options_json JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS responses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    poll_id INTEGER REFERENCES polls(id),
    answer_json JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
