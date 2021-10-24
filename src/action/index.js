export const setQuote = (quote = "123123") => {
  return {
    type: "SETQUOTE",
    payload: quote,
  };
};
