import { useEffect,useState } from "react";
function useWindow(){
    const [height,setheight] = useState(window.innerHeight);
    const [width,setwidth] = useState(window.innerWidth);
    function resizing(){
        setheight(window.innerHeight);
        setwidth(window.innerWidth);
    }
    useEffect(()=> {
        window.addEventListener('resize',resizing);
    })
    return {height,width};
}
export default useWindow;