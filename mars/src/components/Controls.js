import React from "react";
import PropTypes from "prop-types";

const Controls = ({ numberOfPhotos, currentDate, addDays, addIndex }) => {
  return (
    <React.Fragment>
      <div className="d-flex flex-row justify-content-around">
        <div className="p-2">
          <button className="btn btn-link" onClick={() => addDays(-1)}>
            &lt;&lt; Previous Day
          </button>
        </div>
        <div className="p-2">
          <button className="btn btn-link" onClick={() => addIndex(-1)}>
            &lt; Previous Photo
          </button>
        </div>
        <div className="align-self-end p-2 selectedDate">
          <p>
            {currentDate} ({numberOfPhotos})
          </p>
        </div>
        <div className="p-2">
          <button className="btn btn-link" onClick={() => addIndex(1)}>
            Next Photo &gt;
          </button>
        </div>
        <div className="p-2">
          <button className="btn btn-link" onClick={() => addDays(1)}>
            Next Day &gt;&gt;
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

Controls.propTypes = {
  numberOfPhotos: PropTypes.number.isRequired,
  currentDate: PropTypes.string.isRequired,
  addDays: PropTypes.func.isRequired,
  addIndex: PropTypes.func.isRequired
};

export default Controls;
