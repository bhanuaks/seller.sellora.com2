"use client";
import React, { useEffect, useCallback } from 'react';

function SingleScore({ setPrevScore, prevScore, issue }) {
  // Calculate total score
  const totalScore = Number(issue.score) + Number(prevScore);

  // Memoized update function to prevent unnecessary recalculations
  const updateScore = useCallback(() => {
    setPrevScore(totalScore);
  }, [totalScore, setPrevScore]);

  // Update score only when necessary
  useEffect(() => {
    updateScore();
  }, [updateScore]);

  return (
    <input
      type="text"
      value={`${totalScore}%`}
      className="form-control review-input"
      readOnly
      style={{ width: 100, margin: "auto" }}
      aria-label={`Current score: ${totalScore}%`}
    />
  );
}

export default React.memo(SingleScore);