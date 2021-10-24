import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuote } from "../action";
import { useEffect } from "react";

const Button = ({ text }) => {
  useEffect(() => {
    setKanyeQuote();
  }, []);
  const kQuote = useSelector((state) => state);
  let dispatch = useDispatch();
  async function fetchQuote() {
    let res = await fetch("https://api.kanye.rest/");
    let data = await res.json();
    let quote = data.quote;
    return quote;
  }

  let kanyeQuote = "";

  async function setKanyeQuote() {
    kanyeQuote = await fetchQuote();
    await dispatch(setQuote(kanyeQuote));
    console.log(kanyeQuote);
  }

  return (
    <div>
      <button
        className="btn"
        id="btn"
        onClick={() => {
          setKanyeQuote();
          console.log(kQuote);
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
