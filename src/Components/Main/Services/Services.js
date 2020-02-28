import React from "react";
import free from '../../../Images/free.png';
import toDo from '../../../Images/toDo.png';
import brand from '../../../Images/brand.png';
import './Services.scss'

function Services() { 
  return (
      <div className="servicesContainer">
      <div className="servicesItem">
        <img className="itemImage" src={free} alt="free icon" />
        <div className="itemText">
          <h4 className="itemTextHead">Focus</h4>
          <p className="itemTextDescribtion">
            Our unwavering focus on superior service delivery and building next
            generation competencies
          </p>
        </div>
      </div>
 
      <div className="servicesItem">
        <img className="itemImage" src={brand} alt="free icon" />
        <div className="itemText">
          <h4 className="itemTextHead">method</h4>
          <p className="itemTextDescribtion">
            A standardized methodology designed to deliver measurable business
            results and predictable costs
          </p> 
        </div>
      </div>

      <div className="servicesItem">
        <img className="itemImage" src={toDo} alt="free icon" />
        <div className="itemText">
          <h4 className="itemTextHead">method</h4>
          <p className="itemTextDescribtion">
            A highly skilled, proactive workforce that reliably improves each
            client’s ROI while mitigating their business risk
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
