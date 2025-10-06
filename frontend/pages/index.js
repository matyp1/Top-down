import React, { useState } from "react";
import PollCard from "../components/PollCard";
import FactionScoreCard from "../components/FactionScoreCard";
import DailyLeaderboard from "../components/DailyLeaderboard";

// Index page: Central plaza where citizens gather to witness the day's omens.
const mockPoll = {
  question: "How should the Council allocate today's energy reserves?",
  options: ["Empower the Guardians", "Fortify the Pioneers", "Strategize with the Strategists", "Heal with the Harmonizers"],
};

const mockFaction = {
  factionName: "Guardians of the Luminous Gate",
  motto: "Stand watch, shine bright.",
  dailyScore: 87,
  mood: "optimistic",
};

const mockStandings = [
  { name: "Guardians", score: 87, badge: "🛡️" },
  { name: "Pioneers", score: 82, badge: "🚀" },
  { name: "Strategists", score: 79, badge: "♟️" },
  { name: "Harmonizers", score: 74, badge: "🕊️" },
];

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <main className="plaza-grid">
      <PollCard
        question={mockPoll.question}
        options={mockPoll.options}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
      <FactionScoreCard {...mockFaction} />
      <DailyLeaderboard standings={mockStandings} />
    </main>
  );
};

export default Home;
