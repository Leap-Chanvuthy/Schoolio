import BookList from "./BookList";

const Book = () => {
    return ( 
        <div>
            <div>
                <h3 className="text-gray-400 text-2xl text-center font-bold py-6">Find a Book and Get Connected</h3>
                <div className="flex justify-center items-center gap-4 px-4">
                    <input type="text" placeholder="ស្វែងរកសៀវភៅ​ ...." id="Khmer" className="input input-bordered w-[685px] h-[48px] bg-secondary px-4 khmer text-gray-400" />
                    <button className="bg-gradient-to-r from-pink-500 to-secondary text-white font-bold px-4 py-2 khmer">ស្វែងរក</button>
                </div>
            </div>
            <BookList/>
        </div>
     );
}
 
export default Book;