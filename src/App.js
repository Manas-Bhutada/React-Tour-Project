import React from "react";
import data from "./data";
import Tours from "./components/Tours";
import { useState } from "react";

const App = () => {
  const [tours, setTours] = useState(data);

  
  function removeTour(id){
    const newTours = tours.filter( tour => tour.id !== id);
    setTours(newTours);
  }

  
  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2> <br/>No More Tours Left</h2>
        <button onClick={() => setTours(data)} className="btn-white">Refresh</button>
      </div>
    )
  }
  return (
    <div className="App">
     {/* removeTour and tours data are passed as props in tours component */}
      <Tours tours={tours} removeTour={removeTour}> </Tours>
    </div>
  );
};

export default App;