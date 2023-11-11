import Navbar from "../components/layouts/Navbar";
import 'flowbite';

const Upload = () => {
    return (     
        <div className="w-full h-full bg-gradient-to-b from-secondary to-primary">
            <Navbar/>
            <h3 className="text-center text-2xl font-bold text-gray-400 pt-8 pb-4">Upload and Attach Files</h3>
            <h3 className="text-center text-xl font-bold text-gray-400 pb-4">ចែករំលែកសៀវភៅរបស់អ្នក</h3>
{/*             
            <div className="flex justify-center items-center">
                <form className="px-4 py-6" >
                <div class="flex items-center justify-center ">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-[967px] h-[271px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-primary">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-md font-bold text-pink-600">Only PDF are allowed</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div>
                    <div className="flex flex-col text-start py-2  ">
                        <label className="block mb-2 text-sm font-medium text-gray-400 ">ចំណងជើងសៀវភៅ​ Book Title​</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" />
                    </div>
                    <div className="flex flex-col text-start py-2  ">
                         <label className="block mb-2 text-sm font-medium text-gray-400 ">ម្ចាស់សៀវភៅ Author (Optional)</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" />
                    </div>
                    <div className='pt-10 pb-5 font-bold '>
                        <button className='border-2 border-gray-600 px-8 py-2'>Add Book</button>
                    </div>
                </form>
            </div> */}
            <div className="flex justify-center items-center">
                <form className="px-4 py-6 md:w-3/4 lg:w-1/2 xl:w-1/3">
                    <div className="flex items-center justify-center mb-6">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 md:h-32 lg:h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-primary">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-md font-bold text-pink-600">Only PDFs are allowed</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>
                    <div className="flex flex-col text-start py-2">
                        <label className="block mb-2 text-sm font-medium text-gray-400">ចំណងជើងសៀវភៅ Book Title (Require)</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" required />
                    </div>
                    <div className="flex flex-col text-start py-2">
                        <label className="block mb-2 text-sm font-medium text-gray-400">ម្ចាស់សៀវភៅ Author (Optional)</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" />
                    </div>
                    <div className="flex flex-col text-start py-2">
                        <label className="block mb-2 text-sm font-medium text-gray-400">អំពីសៀវភៅ Description (Optional)</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" />
                    </div>
                    <div className="flex flex-col text-start py-2">
                        <label className="block mb-2 text-sm font-medium text-gray-400" >ប្រភេទសៀវភៅ​ Category (Require)</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" required />
                    </div>
                    <div className="flex flex-col text-start py-2">
                        <label className="block mb-2 text-sm font-medium text-gray-400" >គម្របសៀវភៅ​ Thumbnail (Require)</label>
                        <input className="text-gray-400" type="file" required />
                    </div>
                    <div className="py-5 font-bold">
                        <button className="border-2 border-gray-600 px-8 py-2 bg-gradient-to-r from-purple-500 to-pink-500">Add Book</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Upload;