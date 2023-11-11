import {FcGoogle} from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    return ( 
        <div className="w-full h-[100vh] bg-gradient-to-b from-secondary to-primary">
            <div className="flex justify-center items-center text-center p-4">
                <div className="top-[20%] absolute text-gray-300 ">
                    <h3 className="text-4xl font-bold" >Welcome To Schoolio</h3>
                    <p>បំពេញអុីមែល និងពាក្យសម្ងាត់ដើម្បីប្រើប្រាស់</p>
                    <form className="px-4 py-6" >
                        <div className="flex flex-col text-start py-2 ">
                            <label className="block mb-2 text-sm font-medium text-gray-400 ">សូមបំពេញអុីមែល​ Email​</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" />
                        </div>
                        <div className="flex flex-col text-start py-2 ">
                            <label className="block mb-2 text-sm font-medium text-gray-400 ">សូមបំពេញពាក្យសម្ងាត់ Password</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" />
                        </div>
                        <div className='flex justify-center items-center gap-3 py-2 mt-6 bg-gray-700'>
                            <FcGoogle/>
                            <button>Login With Google</button> 
                        </div>
                        <div className='pt-10 pb-5 font-bold '>
                            <button className='border-2 border-gray-600 px-8 py-2'>Login</button>
                        </div>
                        <p>Don't have account ? <Link to='/register' className='text-pink-700'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Login;