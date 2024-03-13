import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [blgs,setBlogs] =useState([])
    useEffect(() =>{
        fetch('blogs.json',)
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    // console.log(blgs);
    return (
        <div className="md:w-2/3">
            <h1> Blogs :{blgs.length}</h1>
        </div>
    );
};

export default Blogs;