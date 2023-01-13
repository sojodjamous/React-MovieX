import React from "react";
import img from './home.jpg'
// const imge="https://www.myapifilms.com/validate?email=sojod2001.jamous@gmail.com&token=oe0qk8l39ml59qvpktl8k1ve46";

const Movies =({titleText,primaryImage
})=>( 
    <div className="movie">
    <div className="side left"></div>
        <div className="side botin">
        <div className="mov">{Object.values(titleText)}</div>


        </div>
        <div className="side main">
        <img src={img}/>


    </div>
    </div>
    
);
export default Movies;