import Card from './Card';


function Tours({ tours, removeTour }) {
  return (
    <div className="container">
      {/* heading */}
      <div>
        <h2 className="title">Plan With Love</h2>
      </div>
      {/* content */}
      <div className="cards">
      
        {/* key={tour.id} => it is a good practice to pass key while using map function */}
        {
            tours.map((tour) => {
            return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
           })
        }
      </div>
    </div>
  );
}

export default Tours;