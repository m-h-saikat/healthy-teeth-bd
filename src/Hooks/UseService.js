import { useEffect, useState } from "react";

const UseService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/Service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return { services };
};

export default UseService;
