import React from "react";
function Slides({ slides }) {
  const [currentSlide, setCurrentSLide] = React.useState(0);
  const handlePageChange = (e) => {
    if (e.target.name === "next") {
      if (currentSlide < 2 && currentSlide >= 0) {
        setCurrentSLide(currentSlide + 1);
      }
    }

    if (e.target.name === "prev") {
      setCurrentSLide(currentSlide - 1);
    }

    if (e.target.name === "restart") {
      setCurrentSLide(0);
    }
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          name="restart"
          onClick={(e) => handlePageChange(e)}
          disabled={currentSlide === 0 ? true : false}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          name="prev"
          onClick={(e) => handlePageChange(e)}
          disabled={currentSlide === 0 ? true : false}
        >
          Prev
        </button>{" "}
        <button
          data-testid="button-next"
          className="small"
          name="next"
          onClick={(e) => handlePageChange(e)}
          disabled={currentSlide >= 2 ? true : false}
        >
          Next
        </button>{" "}
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[currentSlide].title}</h1>
        <p data-testid="text">{slides[currentSlide].text}</p>
      </div>
    </div>
  );
}

export default Slides;
