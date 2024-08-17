import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MatchScreen = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const { data } = await axios.get('/api/matches');
      setMatches(data);
    };

    fetchMatches();
  }, []);

  return (
    <div>
      <h1>Matchs</h1>
      <ul>
        {matches.map(match => (
          <li key={match._id}>{match.homeTeam} vs {match.awayTeam} - {match.score.home}:{match.score.away}</li>
        ))}
      </ul>
    </div>
  );
};

export default MatchScreen;
