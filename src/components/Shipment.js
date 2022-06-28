import React from "react";
import PropTypes from 'prop-types';

class Shipment extends React.Component {

   static propTypes = {
      total: PropTypes.number
   }

   render() {
      const total = this.props.total;
      const shipping = total > 0 && total < 500 ? 350 : 99;
      const shippingNeon = shipping == 99 ? (
         <span className='font-effect-neon total_wrap-cheap'>
            {shipping} $
         </span>
      ) : (
         <span>{shipping} $</span>
      );

      return (
         <div className="total">
            <div className="total_wrap">
               <div>
                  <div>Delivery: {total > 0 ? shippingNeon : null} </div>
                  <div className='total_wrap-free'>
                     {total < 500 ? `Add meals on ${500 - total} $ for  lower delivery price - 99$` : null}
                  </div>
               </div>
               <div className="total_wrap-final">
                  Final check: {total} $
               </div>
            </div>
         </div>
      )
   }
}

export default Shipment;