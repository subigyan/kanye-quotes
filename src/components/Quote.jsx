import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Quote = () => {

  useEffect(()=>{
    
  })

  const quotez = useSelector((state) => state);
  return (
    <div>
      <div className="quote" id="quote">
        {quotez}
      </div>
    </div>
  );
};

export default Quote;
