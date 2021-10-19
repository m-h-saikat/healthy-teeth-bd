import React from 'react';
import './Appoinment.css'
import AppoinmentImg from '../Images/Appoinment.jpg'
const Appoinment = () => {
    return (
        <div>
             <div>
        <img src={AppoinmentImg} alt="" className="img-fluid w-100" height="400"/>
        
      </div>
            <div>
            <div className=" appoinment-container p-5  d-flex justify-content-center">
    <div className="card px-1 py-4 w-50">
        <div className="card-body">
            <h1 className="card-title mb-3 text-danger">Here You Can appointment  for Any Doctor</h1>
         
            <h6 className="information mt-4 h5 mb-3 text-primary">Please provide following information about You</h6>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                       <input className="form-control" type="text" placeholder="Name"/> </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <div className="input-group"> <input className="form-control" type="text" placeholder="Mobile"/> </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <div className="input-group"> <input className="form-control" type="text" placeholder="Email ID"/> </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Doctor's Name"/> </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <input className="form-control" type="date" placeholder="Select Date"/> </div>
                </div>
            </div>
            <div className=" d-flex flex-column text-center px-5 mt-3 mb-3"> <small className="agree-text">By Booking this appointment you agree to the</small> <a href="#" className="terms">Terms & Conditions</a> </div> <button className="btn btn-primary btn-block confirm-button">Confirm</button>
        </div>
    </div>
</div> 
            </div>
        </div>
    );
};

export default Appoinment;