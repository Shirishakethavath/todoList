import React, { useState, useEffect } from 'react';

const QuotesAPI = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const gitUserData = async () => {
      const reqData = await fetch("https://raw.githubusercontent.com/AtaGowani/daily-motivation/refs/heads/master/src/data/quotes.json");
      const resData = await reqData.json();
      setUserData(resData); 
      setLoading(false);
    };
    gitUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const randomQuote = userData[Math.floor(Math.random() * userData.length)];

  return (
   <div className='mb-4'>
      <div className="text-white mb-0 text-center ">
         <p className='quote_text'>{randomQuote ? randomQuote.quote : 'No quote available'}</p>
      </div>
      <span className='d-block quote_author'>~{randomQuote ? randomQuote.author : 'No quote available'}</span>
   </div>
  );
};

export default QuotesAPI;
