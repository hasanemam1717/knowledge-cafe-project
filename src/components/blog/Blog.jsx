import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog);
    const {title,coverimg,reading_time,author_img ,author,posted_date,hashtag} = blog;
    return (
        <div>
            <img src= {coverimg} alt={`Cover picture of the title ${title}`} />
            <div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-6'>
                        <img className='w-14 rounded-xl' src={author_img} alt="" />
                        <div>
                            <h1 className='text-2xl font-bold'>{author}</h1>
                            <h1 className='text-xl '>{posted_date}</h1>
                        </div>
                    </div>
                    <div>
                        <h1>{reading_time}</h1>
                    </div>
                </div>
            </div>
            <h2 className='text-2xl'>{title}</h2>
            <p>{hashtag}</p>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired
}

export default Blog;