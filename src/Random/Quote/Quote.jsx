import React, { useEffect, useState } from "react";

const Quote = () => {
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({
    quote: "",
    person: "",
  });

  let generate = async () => {
    setLoading(true);
    let url = `https://type.fit/api/quotes`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setInfo({
      quote: data[number].text,
      person: data[number].author,
    });
    setLoading(false);
  };

  let next = () => {
    let nextQuote = number + 1;
    if (nextQuote <= 1643) {
      setNumber(nextQuote);
    } else {
      alert("Limit reached");
    }
  };

  useEffect(() => {
    generate();
  }, [number]);

  return (
    <>
      <h5 className="text-center text-white">Random quote generator</h5>
      <div
        className="container bg-dark bg-gradient p-2 rounded shadow text-white"
        style={{ maxWidth: "500px" }}
      >
        {loading ? (
          <div className="text-center d-flex align-items-center justify-content-center">
            <div
              className="spinner-border text-light text-center me-2"
              role="status"
            ></div>
            <h5>Loading...</h5>
          </div>
        ) : (
          <>
            <figure>
              <blockquote className="blockquote">
                <p>{info.quote}</p>
              </blockquote>
              <figcaption className="blockquote-footer  me-5 float-end">
                {info.person}
              </figcaption>
            </figure>
          </>
        )}
      </div>
      <button className="btn btn-dark bg-gradient m-3" onClick={next}>
        Generate quote
      </button>
    </>
  );
};

export default Quote;
