import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { ServiceID } = useParams();
  console.log(ServiceID);
  const [servicesDetails, setServicesDetails] = useState([]);
 const [singleService,setSingleService] = useState([]);

  useEffect(() => {
    fetch('/Service.json')
      .then((res) => res.json())
      .then((data) => setServicesDetails(data));
  }, [ServiceID]);
  useEffect(() => {
    const foundServiceDetails = servicesDetails.find(
      Service => Service.id == ServiceID
    );
    console.log(foundServiceDetails);

    setSingleService(foundServiceDetails);
  }, [servicesDetails]);
  console.log(singleService);

  return (
    <div>
      <Card className="text-center">
        <Card.Header>{}</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default ServiceDetails;
