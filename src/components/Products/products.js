import Productcard from "../ProductCards/Productcard";
// import { useState } from "react";
import { useEffect, useState } from "react";
function Products(){
    
    // const products = [
        //     {
            //     id: 1,
            //     title: "Apple iPhone 14",
            //     price: "Rs. 1,00,000"
            //     },
            //     {
                //     id: 2,
                //     title: "Apple iPhone 13",
                //     price: "Rs. 70,000"
                //     },
                //     {
                    //     id: 3,
                    //     title: "Google Pixel 7",
                    //     price: "Rs. 50,000"
                    //     },
                    //     {
                        //     id: 4,
                        //     title: "Nokia 1100",
                        //     price: "Rs. 2,000"
                        //     },
                        //     {
                            //     id: 5,
                            //     title: "Samsung Galaxy S10",
                            //     price: "Rs. 1,00,000"
                            //     },
                            //     {
                                //     id: 6,
                                //     title: "Sony Xperia S10",
                                //     price: "Rs. 1,00,000"
                                //     }
                                // ];
    let [products,setProducts] = useState([]) ;
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products").then(

    (response) => {

    return response.json();

    }

    ).then((res) =>{

    console.log(res);

    setProducts(res);

    })
    return (
        <div>
            I am products
            {
                products.map(function(item){
                    return (<Productcard title={item.title} price={item.price}/>)
                })
            }
        </div>
    )
}
export let a = 10;
export let b = 20;
export default Products;
// oldDom = [
// <ProductCard title="Title 1" />,
// <ProductCard title="Title 2" />,
// <ProductCard title="Title 3" />
// ]
// newDom = [
// <ProductCard title="Title 1" />,
// <ProductCard title="Title 4" />,
// <ProductCard title="Title 2" />,
// <ProductCard title="Title 3" />
// ]