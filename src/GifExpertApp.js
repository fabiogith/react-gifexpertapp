import {  useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp =()=>{
   
    const [categories, setCategories] = useState(['One Punch']);
    // const handleAdd = () =>{
    //     const serie = "Los caballeros del zodiaco";
        
    //     setCategories([...categories, serie]);
    // }
    
    return (
        <>
        <h2>Gif Expert APP</h2>
        <AddCategory setCategories = { setCategories } />
        <hr/>

        <ol>
            {
                categories.map((elm) => 
                    <GifGrid
                        key={elm} 
                        category= {elm}
                    />
                )
            }
        </ol>

        </>
    )
}

export default GifExpertApp;