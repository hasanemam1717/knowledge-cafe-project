import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddToBookmarks,readingTimeAddToBookmarks}) => {
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
            {
                blgs.map(blog => <Blog 
                    blog={blog}
                    handleAddToBookmarks={handleAddToBookmarks}
                    readingTimeAddToBookmarks={readingTimeAddToBookmarks}
                    key={blog.id}></Blog >)
            }
        </div>
    );
};

Blogs.propTypes ={
    handleAddToBookmarks : PropTypes.func,
    readingTimeAddToBookmarks : PropTypes.func
}

export default Blogs;