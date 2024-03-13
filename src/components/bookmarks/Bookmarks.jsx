import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';
const Bookmarks = ({bookmarks,reading_time}) => {
    return (
        <div className="md:w-1/3">
            <div>
                <h1 className='text-3xl font-bold'>Reading Time:{reading_time} minute</h1>
            </div>
            <h1  className='text-3xl font-bold text-center'>Bookmarks Blogs : {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,index) =><Bookmark 
                key={index}
                bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    reading_time: PropTypes.number.isRequired
}
export default Bookmarks;