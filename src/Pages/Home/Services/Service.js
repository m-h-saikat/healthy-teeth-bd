import React from 'react';
import { Link } from 'react-router-dom';

import './Service.css'
import UseService from '../../../Hooks/UseService'
const Service = () => {
    const {services}=UseService();

    return (
        <div id="Service">
            <div>
                <h1 className="text-danger mb-4 mt-5">OUR SERVICES <hr /></h1>
            </div>
               <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto ">
{services.map((service) => (
   
<div className="col" key={service.key}>
<div className="card Service-card h-60 shadow p-3 mb-5 mt-5 bg-white rounded">
 <img
   src={service.image}
   className="img-fluid rounded"
   alt="..." 
 />
 <div className="card-body">
   <h2 className="card-title text-danger">
     <b>{service.title}</b>
   </h2>
   <p className="card-text mt-3">{service.ShortDescription}</p>


   <br />
   <h4 className="text-primary">Service Charge : ${service.price}</h4>
 </div>
 <div className="card-footer">
 <Link to="/ServiceDetails"  style={{paddingLeft: 13, textDecoration: 'none'}}> <button className="btn btn-primary">Details</button> </Link>
 </div>
</div>
</div>
))}
</div> 
        </div>
    );
};

export default Service;