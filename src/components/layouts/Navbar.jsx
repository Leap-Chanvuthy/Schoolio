import {BiUpload} from 'react-icons/bi';

const Navbar = () => {
    return ( 
        <div className="bg-secondary p-10  font-bold text-gray-400">
            <div className="flex justify-between items-center">
                <div>
                    <h2>Logo</h2>
                </div>
                <div className="flex justify-center items-center  gap-6">
                    <h4>Home</h4>
                    <h4>About Us</h4>
                    <h4>Login</h4>
                    <button className='flex justify-center items-center gap-2 bg-gradient-to-r from-primary to-pink-500 px-2 py-1 rounded-sm text-white'>
                        <span><BiUpload/></span>
                        <span>Upload</span>
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;