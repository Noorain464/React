import './Productcard.css';
// import Addtocart from '/home/syeda/Desktop/React/classes/src/Addtocart/Addtocart.js';
import Effect from '../../Effects/Effect.js';
import { useRef } from 'react';
import { useState } from 'react';
import logo1 from '/home/syeda/Desktop/React/classes/src/assests/logo512.png';
function Productcard({title,price}){
    let pRef = useRef(0);
    let inRef = useRef(0);
    let valRef = useRef(0);
    let [inputV,setInputV] = useState('Class');
    function printTitle(){
        if(pRef.current.style.display==="block"){
            pRef.current.style.display="none";
        }
        else{
            pRef.current.style.display="block";
        }
    }
    function Change(e){
        // valRef.current.innerText = "Over here the output would arrive - " + inRef.current.value;
        setInputV(e.target.value);
    }

    return(
        <div className="product-card">
            <p onClick={printTitle}>{title}</p>
            <p ref={pRef}>{price}</p>
            <img src={logo1} alt=' ' />
            <input value={inputV} onChange={Change} type="text" ref={inRef}/>
            <p ref={valRef}>Over here the output would arrive - {inputV} </p> 
            {/* <Addtocart /> */}
            <Effect />
        </div>
    )
}
export default Productcard;