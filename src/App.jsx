

import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {

  const [bookmarks,setBookMarks] =useState([])
  const [reading_time,setReadingTime] =useState(0)
  

  const handleAddToBookmarks =blog  => {
    const newBookmarks = [...bookmarks, blog]
    setBookMarks(newBookmarks)
  

  }

  const readingTimeAddToBookmarks = (read ,id) =>{
    const reading = parseInt(read)
    const time = parseInt(reading_time)
    // console.log(reading , time)
    const newReadingTime =reading + time;
    parseInt(newReadingTime)
    setReadingTime(newReadingTime)
    // console.log('Remove bookmarks id ' ,id)
    const reamainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookMarks(reamainingBookmarks);
  }

  return (
    <>
    <div className='container mx-auto'>
        <Header></Header>
        <div className='md:flex md:gap-40'>
        <Blogs 
        handleAddToBookmarks={handleAddToBookmarks}
        readingTimeAddToBookmarks={readingTimeAddToBookmarks}
        ></Blogs>
        <Bookmarks 
        bookmarks ={bookmarks}
        reading_time ={reading_time}
        ></Bookmarks>

        </div>

    </div>
      
    
      
    </>
  )
}

export default App
