import React, { useState } from "react";
import Header from "./Header";
import Controls from "./Controls";
import useMarsPhotos from "../hooks/useMarsPhotos";

const Home = () => {
  const [offsetDays, setOffsetDays] = useState(-30);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedDate = new Date();
  selectedDate.setDate(selectedDate.getDate() + offsetDays);

  const { loading, photos, error } = useMarsPhotos({
    variables: {
      searchInput: `earth_date=${selectedDate
        .toISOString()
        .slice(0, 10)}&camera=NAVCAM&api_key=${process.env.REACT_APP_API_KEY}`
    }
  });

  const addDays = numberOfDays => {
    setSelectedIndex(0);
    setOffsetDays(offsetDays + numberOfDays);
  };

  const addIndex = indexAdjustment => {
    const newIndex = selectedIndex + indexAdjustment;
    if (newIndex >= 0 && newIndex <= photos.length - 1) {
      setSelectedIndex(newIndex);
    }
  };

  if (error) {
    return (
      <pre>
        {error.graphQLErrors.map(({ message }, i) => (
          <span key={i}>{message}</span>
        ))}
      </pre>
    );
  }

  if (loading) {
    return (
      <React.Fragment>
        <Header />
        <div className="spinner" />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Header />
      <Controls
        currentDate={selectedDate.toDateString()}
        numberOfPhotos={photos.length}
        addDays={addDays}
        addIndex={addIndex}
      />
      <div className="d-flex flex-row justify-content-center">
        <div className="p-2">
          {photos.length > 0 ? (
            <img src={photos[selectedIndex].img_src} alt="Mars" />
          ) : (
            <p>There are no images to see for this day. :-(</p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
