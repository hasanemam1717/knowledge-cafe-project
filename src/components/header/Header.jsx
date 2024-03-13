import Profile from '../../../src/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center  my-4 border-b-2 border-gray-300 p-4'>
              <h1 className='text-4xl font-bold'>Knowloge Cafe</h1>
              <img src={Profile} alt="" />
        </div>
    );
};

export default Header;