import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    // console.log(title);
    return (
        <div className='font-semibold text-2xl bg-gray-100 shadow-md rounded-md p-4 m-3'>
            <h1>{title}</h1>
        </div>
    );
};
Bookmark.propTypes ={
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;