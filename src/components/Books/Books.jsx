import { useState } from "react";
import BookList from "./BookList";

const Book = () => {
    const [searchBooks , setSearchBooks] = useState('');

    return ( 
        <div className="w-full h-full bg-gradient-to-b from-secondary to-primary pt-16 pb-10">
            <div>
                <h3 className="text-gray-400 text-2xl text-center font-bold ">Find a Book and Get Connected</h3>
                <h3 className="text-gray-400 text-2xl text-center font-bold pb-6 px-2 pt-2">ស្វែងរកសៀវភៅ​ដែលអ្នកពេញចិត្ត</h3>
                <div className="flex justify-center items-center gap-4 px-6">
                    <input 
                    type="text" 
                    placeholder="ស្វែងរកសៀវភៅ​ ...." 
                    id="Khmer" 
                    onChange={((e) => setSearchBooks(e.target.value))}
                    className="input input-bordered w-[685px] h-[48px] bg-secondary px-4 khmer text-gray-400" />
                    {/* <button className="bg-gradient-to-r from-pink-500 to-secondary text-white font-bold px-4 py-2 lg:md:visible sm:hidden">ស្វែងរក</button> */}
                </div>
            </div>
            <BookList search={searchBooks}/>
        </div>
     );
}
 
export default Book;