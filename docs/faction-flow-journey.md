# Faction Flow Journey Blueprint

## Foundation
- **Idea**: Faction Flow
- **Core Mechanics**
  - Community polls that fuel faction rivalries and cohesion.
  - Personality tests that align recruits with their natural faction fit.
  - Playful faction bots that curate member profiles and celebrate progress.
- **North Star Goal**: Grow the network by guiding every citizen through structured polling rituals and deepening faction identity.

## Network Strength

### Social Glue
- Rotating faction leaderboards that showcase collective wins and drive healthy competition.
- Daily rituals including polls, check-ins, and mini debates that keep cadence and conversation alive.
- Faction bots with humor, callbacks, and insider lore to reinforce belonging.

### Structural Integrity
- Supabase/Postgres stack protected with row-level security to guard personal data.
- Clear separation between individual records and aggregated faction analytics.
- Versioned poll and prompt templates so the canon can evolve without losing history.

### Cultural Identity
- Faction lore that grows as the community uncovers new narrative layers together.
- Unlockable narrative beats that appear as trust and participation increase.
- Daily digests and faction commentary that can be shared publicly to attract new recruits.

## Onboarding Flow

### Verification & Enrollment Steps
1. Email plus phone one-time password verification anchors each identity.
2. Device fingerprint binding ties the profile to trusted hardware.
3. Maintain a single profile record per human with a rolling trust score.
4. Introduce a "grey mode" experience for unverified or suspicious accounts until they earn trust.
5. Grow the trust score through consistent positive interactions and faction contributions.

### Data Model Highlights
- `id` – UUID primary key for every user.
- `email_verified` / `phone_verified` – Boolean flags after OTP confirmation.
- `device_hash` – Fingerprint hash for device binding and anomaly detection.
- `trust_score` – Integer meter that rises with healthy engagement.
- `faction_id` – Nullable UUID to capture allegiance once the citizen chooses a faction.

### Security Principles
- All identifiers hashed or tokenized before storage or transmission.
- Row-level security (RLS) policies gate access to personal records.
- Faction-level penalties discourage duplicate account abuse and protect network trust.
