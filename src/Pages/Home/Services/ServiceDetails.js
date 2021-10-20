import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import UseService from "../../../Hooks/UseService";
import './ServiceDetails.css'
const ServiceDetails = () => {
  const { ServiceID } = useParams();
  const { services } = UseService();
 const [singleService,setSingleService] = useState([]);


    useEffect(() => {
      if(services.length>0){const Details = services?.find((service) => service.id === Number(ServiceID)); 
        setSingleService(Details);

    }}, [services,ServiceID]);
 


  return (
    <div className="mx-auto singleService-container p-5">
     <Card className="singleService mx-auto w-25 p-4 ">
  <Card.Img variant="top" src={singleService.image} width="100" height="300"/>
  <Card.Body>
    <Card.Title className="text-danger"> <h2>{singleService.title}</h2> </Card.Title>
    <Card.Text >
  {singleService.FullDescription}
  <br/>
  <br/>
 <h3 className="text-primary"> Sevice Charge : {singleService.price}</h3>
    </Card.Text>
    <Button variant="primary" className="btn btn-dark  "> <Link to="/Appoinment" className="text-center text-white Service-Details-Button p-2">
                  
                  Appointment
                                </Link></Button>
   
  </Card.Body>
</Card>
    </div>
  );
};

export default ServiceDetails;
