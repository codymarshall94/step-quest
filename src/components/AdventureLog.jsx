import React from "react";

function AdventureLog({ userLog, enemyLog }) {
  if (!userLog) userLog = "You are ready to fight!";

  if (userLog.length > 0) {
    return (
      <div className="adventure-log-container">
        <div className="adventure-log">
          <div className="adventure-log-entry">
            <span className="adventure-log-entry-text">{userLog}</span>
          </div>
          <div className="adventure-log-entry">
            <span className="adventure-log-entry-text">{enemyLog}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="adventure-log-container">
        <div className="adventure-log">
          <div className="adventure-log-entry">
            <span className="adventure-log-entry-text">{userLog}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default AdventureLog;
