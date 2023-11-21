import React, { useEffect, useState } from "react";

const Greeting = (props) => {
  const [name, setName] = useState("Euralio");

  useEffect(() => {
    setTimeout(() => {
      setName("Alfonsina");
    }, 3000);
  }, []);

  return <p>Hello {name}</p>;
};

export default Greeting;
