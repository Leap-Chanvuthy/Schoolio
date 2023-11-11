import {FcGoogle} from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Register = () => {
    return ( 
        <div className="w-full h-[100vh] bg-gradient-to-b from-secondary to-primary">
            <div className="flex justify-center items-center text-center p-4">
                <div className="top-[8%] absolute text-gray-300 ">
                    <h3 className="text-4xl font-bold" >Welcome To Schoolio</h3>
                    <p>សូមចុះឈ្មោះសម្រាប់ប្រើប្រាស់</p>
                    <form className="px-4 py-6" >
                        {/* error alert */}
                        <div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                            </svg>
                            <span class="sr-only">Info</span>
                            <div className='flex justify-center items-center gap-3'>
                                <span class="font-medium">Invalid register</span>
                                <p>Incorrect email or password !</p>
                            </div>
                        </div>
                        <div className="flex flex-col text-start py-2 ">
                            <label className="block mb-2 text-sm font-medium text-gray-400 ">សូមបំពេញអុីមែល​ Email​</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" />
                        </div>
                        <div className="flex flex-col text-start py-2 ">
                            <label className="block mb-2 text-sm font-medium text-gray-400 ">សូមបំពេញពាក្យសម្ងាត់ Password</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" />
                        </div>
                        {/* <div className="flex flex-col text-start py-2 ">
                            <label className="block mb-2 text-sm font-medium text-gray-400 ">សូមបំពេញពាក្យសម្ងាត់ម្តងទៀត Repeat password</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" />
                        </div> */}
                        <div className="flex flex-col text-start py-2 ">
                            <label className="block mb-2 text-sm font-medium text-gray-400 ">សូមបំពេញឈ្មោះ Username</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" />
                        </div>
                        <div className='flex justify-center items-center gap-3 py-2 mt-6 bg-gray-700'>
                            <FcGoogle/>
                            <button>Sign Up With Google</button> 
                        </div>
                        <div className='pt-10 pb-5 font-bold '>
                            <button className='border-2 border-gray-600 px-8 py-2'>Sign Up</button>
                        </div>
                        <p>Already register ? <Link to='/login' className='text-pink-700'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Register;