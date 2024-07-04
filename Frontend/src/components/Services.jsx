import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/conference.jpg",
      title: "Conference Metting",
    },
    {
      id: 2,
      url: "/wedding.jpg",
      title: "Wedding Planning",
    },
    {
      id: 3,
      url: "/parties.jpg",
      title: "Party Planning",
    }
  
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;