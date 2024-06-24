import React from "react";
import "./TypeWriter.css";
import { useEffect } from "react";
import { useState } from "react";
function Typing(
    text,
    typingSpeed = 100,
    deletingSpeed = 50,
    duration = 100,
){
    const [displayedText,setdisplayedText] = useState("");
    const [isDeleting , setDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const handletyping = () =>{
            if(!isDeleting){
                if(displayedText.length < text[index].length){
                    setdisplayedText((prev)=> prev + text[index].charAt(displayedText))
                   
                }
                else{
                    setTimeout(() => setDeleting(true),duration);
                }
            }
            else{
                if(displayedText.length > 0){
                    setdisplayedText((prev) => prev.slice(0,-1));
                }
                else{
                    setDeleting(false);
                    setIndex((prev) => (prev + 1)%text.length)
                }

            }
        };

        const timer = setTimeout(handletyping,
            isDeleting ? deletingSpeed : typingSpeed
        );
        return () => clearTimeout(timer);
    },[displayedText,isDeleting,index,text,deletingSpeed,typingSpeed,duration])

    return(
        <div className="type-writer">
                
            <span className="caret">|</span>
        </div>
    )
}
export default Typing;