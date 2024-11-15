import React, { useState, useEffect } from 'react';

function WindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

   
    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='ab'>
      <h3>Window Size : </h3>
      <h3 className='aa'>
       <span> {windowSize.width}px </span>
         {windowSize.height}px
      </h3>

    </div>
  );
}

export default WindowSize;
