import { useState } from "react";

function Effect(){
    const [count1,setcount1] = useState(0);
    const [count2,setcount2] = useState(0);
    return(
       <div>
        <button onClick={() => {setcount1(count1 + 1)}}>Add</button>
        <p>{count1}</p>
        <button onClick={() => {setcount2(count2 + 1)}}>Add</button>
        <p>{count2}</p>
       </div> 
    )
}
export default Effect;