import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog,handleAddToBookmarks,readingTimeAddToBookmarks}) => {
    // console.log(blog);
    const {title,coverimg,reading_time,author_img ,author,posted_date,hashtag,id} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full rounded-lg' src= {coverimg} alt={`Cover picture of the title ${title}`} />
            <div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-6 my-4'>
                        <img className='w-14 rounded-xl' src={author_img} alt="" />
                        <div>
                            <h1 className='text-2xl font-bold'>{author}</h1>
                            <h1 className='text-xl '>{posted_date}</h1>
                        </div>
                    </div>
                    <div className='flex'>
                        <h1>{reading_time} minutes</h1>
                        <button onClick={() =>handleAddToBookmarks(blog)} className='ml-2 '><CiBookmark></CiBookmark></button>
                    </div>
                </div>
            </div>
            <h2 className='text-2xl'>{title}</h2>
            <p>{hashtag}</p>
            <button onClick={() =>readingTimeAddToBookmarks(reading_time,id)} className='text-xl font-bold text-blue-700'>Mark as read
            </button>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks : PropTypes.func,
    readingTimeAddToBookmarks : PropTypes.func
}

export default Blog;