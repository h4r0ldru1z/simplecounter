//import react into the bundle
import propTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props){
    return (
        <div className="bigContainer">
            <div className="icon"><i class="fa-regular fa-clock"></i></div>
            <div className="sexto">{props.digSeis % 10}</div>
            <div className="quinto">{props.digCinco % 10}</div>
            <div className="cuarto">{props.digCuatro % 10}</div>
            <div className="tercero">{props.digTres % 10}</div>
            <div className="segundo">{props.digDos % 10}</div>
            <div className="primero">{props.digUno % 10}</div>
        </div>

    )
};

SimpleCounter.PropTypes = {
    digSeis: propTypes.number,
    digCinco: propTypes.number,
    digCuatro: propTypes.number,
    digTres: propTypes.number,
    digDos: propTypes.number,
    digUno: propTypes.number
}

let counter = 0;

setInterval(function(){
    const posSeis= Math.floor(counter/1000000);
    const posCinco= Math.floor(counter/100000);
    const posCuatro= Math.floor(counter/1000);
    const posTres= Math.floor(counter/100);
    const posDos= Math.floor(counter/10);
    const posUno= Math.floor(counter/1);

    counter++;
    
    ReactDOM.render(<SimpleCounter 
    digUno={posUno}
    digDos={posDos}
    digTres={posTres}
    digCuatro={posCuatro}
    digCinco={posCinco}
    digSeis={posSeis} />, 
    document.querySelector("#app"));

}, 1000);

