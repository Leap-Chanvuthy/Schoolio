import { useEffect, useState } from "react";
import { Books } from "../../data/Books";
import {onSnapshot , collection , getDocs} from "firebase/firestore";
import {db} from "../../config/firebase";

const BookList = (props) => {

    const [books , setBooks] = useState([]);
    const [loading , setLoading] = useState(true);
    const booksCollection = collection(db , 'books');

  useEffect(() => {
    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(booksCollection);
            const newData = [];

            querySnapshot.forEach((doc) => {
                newData.push({ ...doc.data(), id: doc.id });
            });
            newData.sort(() => Math.random * 0.5)
            setBooks(newData);
            setLoading(false);
            console.log(newData);
        } catch (error) {
            console.log(error);
        }
    };

    fetchData();
}, []);


    return ( 
        <div>
          <div className="grid justify-items-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 py-10 px-12">
              {loading && <h2 className="text-gray-400">Loading ....</h2>}
              { books && books.filter((val) =>{
                if(props.search == ''){
                  return val;
                }
                else if (val.title.toLowerCase().includes(props.search.toLowerCase())){
                  return val;
                }
              }).map((book) => (
              <div key={book.id} className="mb-10 w-[166px] h-[290px] bg-secondary overflow-hidden ">
                  <img src={book.thumbnailFile} className="w-[166px] h-[200px]" />
                  <div className="flex items-center gap-2 text-sm rounded-full p-2 ">
                    <img className="w-7 h-7 rounded-full border-2 border-primary" src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/avatar-icon.png"  />
                    <h4 className="font-semibold text-gray-500">Unkown user</h4>
                  </div>
                  <h4 className="font-semibold text-white px-2 text-center">{book.title}</h4>
              </div>
              ))}
          </div>
        </div>
     );
}
 
export default BookList;