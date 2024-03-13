

import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {

  return (
    <>
    <div className='container mx-auto'>
        <Header></Header>
        <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>

        </div>

    </div>
      
    
      
    </>
  )
}

export default App
