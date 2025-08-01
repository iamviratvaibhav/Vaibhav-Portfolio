import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './flip.css';

function ProfileCounter() {
  const [count, setCount] = useState(null);
  const [flip, setFlip] = useState(false);

  const fetchAndIncrementCounter = async () => {
    try {
      setFlip(true);
      const response = await axios.get('http://localhost:5001/api/counter');
      setCount(response.data.count);
      setTimeout(() => setFlip(false), 500);
    } catch (error) {
      console.error("Error incrementing counter:", error);
    }
  };

  useEffect(() => {
    fetchAndIncrementCounter();
  }, []);

  return (

    <>
      <div className={`calendar-flip-box ${flip ? 'flip' : ''}`}>
        <div className="calendar-flip-front ">
          {count}
        </div>
      </div>

    </>
  );
}

export default ProfileCounter;
