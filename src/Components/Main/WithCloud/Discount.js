import React from "react";
import './WithCloud.scss';
import { Button } from "@material-ui/core";


function Discount() {
  return (
    <div className="discountContainer"> 
      <div className="discountPaper">
        <h3 className="discountPercent">55%</h3>
        <h4 className="percentDescribe">SUMMER SALES</h4>
      </div>
      <h5 className="followUS">Follow us on Facebook</h5>

      <p className="followDescribe">
        Sed ut perspiciatis unde omnis iste natus error sit
      </p>
      <Button
        startIcon={<i class="fab fa-facebook-f" style={{fontSize: 15}}></i>}
        id="percentBtn"
        variant="outlined"
      >
        FOLLOW
      </Button>
    </div>
  );
}

export default Discount;
