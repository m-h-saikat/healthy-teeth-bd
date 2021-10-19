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
            <div class=" appoinment-container p-5  d-flex justify-content-center">
    <div class="card px-1 py-4 w-50">
        <div class="card-body">
            <h1 class="card-title mb-3 text-danger">Here You Can appointment  for Any Doctor</h1>
         
            <h6 class="information mt-4 h5 mb-3 text-primary">Please provide following information about You</h6>
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                       <input class="form-control" type="text" placeholder="Name"/> </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <div class="input-group"> <input class="form-control" type="text" placeholder="Mobile"/> </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <div class="input-group"> <input class="form-control" type="text" placeholder="Email ID"/> </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <input class="form-control" type="text" placeholder="Doctor's Name"/> </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <input class="form-control" type="date" placeholder="Select Date"/> </div>
                </div>
            </div>
            <div class=" d-flex flex-column text-center px-5 mt-3 mb-3"> <small class="agree-text">By Booking this appointment you agree to the</small> <a href="#" class="terms">Terms & Conditions</a> </div> <button class="btn btn-primary btn-block confirm-button">Confirm</button>
        </div>
    </div>
</div> 
            </div>
        </div>
    );
};

export default Appoinment;