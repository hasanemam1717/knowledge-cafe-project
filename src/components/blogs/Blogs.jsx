import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";


const Blogs = () => {
    const [blgs,setBlogs] =useState([])
    useEffect(() =>{
        fetch('blogs.json',)
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    console.log(blgs);
    return (
        <div className="md:w-2/3">
            <h1> Blogs :{blgs.length}</h1>
            {
                blgs.map(blog => <Blog 
                    blog={blog}
                    
                    key={blog.id}></Blog>)
            }
        </div>
    );
};

export default Blogs;