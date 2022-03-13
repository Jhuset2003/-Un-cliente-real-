import React,{useState} from 'react'
import demo from "../../Source/Img/pexels-arthur-brognoli-3343621.jpg"
import CarouselCard from './CarouselCard/CategoryCarouselCard'
import MiniCarousels from './Carousels/MiniCarousels'
import "./Info.css"



const Info = () =>{
    const [info, setInfo] = useState([
        {
            id:1,
            products:"Hamburguesas",
            img:demo,
            types:[
                {product:"Sencilla",value:5000,img:demo,},
                {product:"Pollo",value:5000,img:demo,},
                {product:"Bufalo",value:5000,img:demo,},
                {product:"Ranchera",value:5000,img:demo,},
            ]
            
        },
        {
            id:1,
            products:"Hamburguesas",
            img:demo,
            types:[
                {product:"Sencilla",value:5000,img:{demo},},
                {product:"Pollo",value:5000,img:{demo},},
                {product:"Bufalo",value:5000,img:{demo},},
                {product:"Ranchera",value:5000,img:{demo},},
            ]
            
        },
        {
            id:1,
            products:"Hamburguesas",
            img:demo,
            types:[
                {product:"Sencilla",value:5000,img:{demo},},
                {product:"Pollo",value:5000,img:{demo},},
                {product:"Bufalo",value:5000,img:{demo},},
                {product:"Ranchera",value:5000,img:{demo},},
            ]
            
        },
        {
            id:1,
            products:"Hamburguesas",
            img:demo,
            types:[
                {product:"Sencilla",value:5000,img:{demo},},
                {product:"Pollo",value:5000,img:{demo},},
                {product:"Bufalo",value:5000,img:{demo},},
                {product:"Ranchera",value:5000,img:{demo},},
            ]
            
        },
        {
            id:1,
            products:"Hamburguesas",
            img:demo,
            types:[
                {product:"Sencilla",value:5000,img:{demo},},
                {product:"Pollo",value:5000,img:{demo},},
                {product:"Bufalo",value:5000,img:{demo},},
                {product:"Ranchera",value:5000,img:{demo},},
            ]
            
        },
        {
            id:1,
            products:"Hamburguesas",
            img:demo,
            types:[
                {product:"Sencilla",value:5000,img:{demo},},
                {product:"Pollo",value:5000,img:{demo},},
                {product:"Bufalo",value:5000,img:{demo},},
                {product:"Ranchera",value:5000,img:{demo},},
            ]
            
        },
        {
            id:1,
            products:"Hamburguesas",
            img:demo,
            types:[
                {product:"Sencilla",value:5000,img:{demo},},
                {product:"Pollo",value:5000,img:{demo},},
                {product:"Bufalo",value:5000,img:{demo},},
                {product:"Ranchera",value:5000,img:{demo},},
            ]
            
        },
        ]);

        return(
            <div className="carousel-container">
                <div className="carouselgeneralcard">
                    {info.map((carouselcard,index)=>{
                        return (
                        <CarouselCard key={index}products={carouselcard.products} images={carouselcard.img}/>  
                        )
                    })}

                </div>
            </div>
        )



}
export default Info;