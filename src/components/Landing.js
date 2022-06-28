import React, { useState } from "react";
import restaurants from '../sample-restaurants';
import PropTypes from 'prop-types';


const Landing = (props) => {



   const [display, setDisplay] = useState(false);
   const [title, setTitle] = useState("");
   const [url, setUrl] = useState("");

   const displayList = () => {
      setDisplay(!display)
   }

   const getTitle = (restaurant) => {
      const { title, url } = restaurant;
      setTitle(title)
      setUrl(url)
      setDisplay(false)
   }
   const goToRestaurant = () => {
      props.history.push('/restaurant/' + url);
   }
   return (
      <div className="restaurant_select">
         <div className="restaurant_select_top">


            <div onClick={displayList}
               className="restaurant_select_top-header"
               style={{ fontFamily: 'Raleway' }}>
               {title ? title : 'Choose your restaurant'}
            </div>

            <div className="arrow_picker">
               <div className="arrow_picker-up"></div>
               <div className="arrow_picker-down"></div>
            </div>

            {display ?
               <div className="restaurant_select_bottom">
                  <ul>
                     {restaurants.map(restaurant => {
                        return <li
                           onClick={() => getTitle(restaurant)} key={restaurant.id}>{restaurant.title}</li>
                     })}
                  </ul>
               </div>
               : null}
         </div>
         {title && !display ? (<button onClick={goToRestaurant}>Go to the menu</button>) : null}
      </div>
   );
}
Landing.propTypes = {
   history: PropTypes.object
}


export default Landing;