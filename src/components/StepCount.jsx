import React from "react";
import "../css/stepcount.css";

const pointsAbbreviated = (points) => {
  if (points >= 1000000000) {
    return (points / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (points >= 1000000) {
    return (points / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (points >= 1000) {
    return (points / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return points;
};

function StepCount({ points }) {
  if (points) {
    points = pointsAbbreviated(points);
  }

  return (
    <div className="step-container">
      <span>Step Points {points}</span>
    </div>
  );
}

export default StepCount;
