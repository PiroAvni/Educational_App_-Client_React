import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProgressList = () => {
  const [progressList, setProgressList] = useState([]);

  useEffect(() => {
    // Fetch progress data from the backend
    const fetchProgress = async () => {
      const response = await axios.get('/api/progress'); // Example endpoint
      setProgressList(response.data);
    };

    fetchProgress();
  }, []);

  return (
    <div>
      {progressList.map((progress) => (
        <div key={progress._id}>
          {/* Display progress information */}
          <h3>User ID: {progress.userId}</h3>
          <p>Deck ID: {progress.deckId}</p>
          <p>Cards Reviewed: {progress.cardsReviewed.length}</p>
          <p>Correct Responses: {progress.correctResponses}</p>
          <p>Incorrect Responses: {progress.incorrectResponses}</p>
          <p>Last Reviewed At: {progress.lastReviewedAt}</p>
          <p>Progress Percentage: {progress.progressPercentage}</p>
          <p>Completion Status: {progress.completionStatus}</p>
        </div>
      ))}
    </div>
  );
};

export default ProgressList;
