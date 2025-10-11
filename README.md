# Faction Flow Society Engine

An early skeleton for a digital society simulator that unites citizens into factions through daily polls, communal scoring, and lore-infused analytics.

## Structure
- `frontend/` – Next.js plaza housing faction-facing components.
- `backend/` – Express gateway orchestrating poll, response, and faction summary routes.
- `db/` – Postgres tablets defining the core tables with Supabase-flavoured RLS policies.
- `docs/` – Lore scrolls outlining journeys, onboarding, and community scaffolding.
- `scripts/` – Analytics rituals run by the Midnight Assembly.

Each module embraces faction-flavored naming to keep the narrative spirit alive while leaving room for real integrations later on.

## Journey Blueprint

The `docs/faction-flow-journey.md` scroll captures the foundational idea, network rituals, and onboarding safeguards for Faction Flow. Use it as the guiding compass when extending data models, designing faction bots, or crafting daily rituals.

## 4D Live Map Scaffold

To support experimentation with a time-aware terrain map, the repository now includes a Prisma + PostgreSQL data layer and seeding utilities.

1. Copy `.env.example` to `.env` and adjust the `DATABASE_URL` for your Postgres or Supabase instance.
2. Install dependencies with `npm install`.
3. Apply the schema with `npm run db:push`.
4. Populate demo data with `npm run seed`.

The `scripts/push.sh` helper can be used to publish the repository to GitHub once `GITHUB_PAT` (and optionally `GITHUB_USERNAME`) are configured in your shell environment.
