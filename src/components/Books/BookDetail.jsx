// BookDetails.jsx
import { useState, useEffect } from 'react';
import { useParams , Link} from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { storage } from '../../config/firebase';
import {getDownloadURL , ref} from 'firebase/storage';
import { FaFilePdf } from "react-icons/fa6";

const BookDetails = () => {
    const  {bookId}  = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchBook = async () => {
        try {
          const bookDoc = await getDoc(doc(db, 'books', bookId));
  
          if (bookDoc.exists()) {
            setBook({ ...bookDoc.data(), id: bookDoc.id });
          } else {
            console.log('Book not found');
          }
  
          setLoading(false);
        } catch (error) {
          console.error('Error fetching book:', error);
          setError(error.message); // Set the error state
          setLoading(false);
        }
      };
  
      fetchBook();
    }, [bookId]);
  
    if (loading) {
      return <h2>Loading...</h2>;
    }
  
    if (error) {
      return <h2>Error: {error}</h2>;
    }
  
    if (!book) {
      return <h2>Book not found</h2>;
    }

    const downloadFile = async (fileName) => {
        const fileRef = ref(storage, fileName);
        try {
          const downloadURL = await getDownloadURL(fileRef);
          window.location.href = downloadURL;
        } catch (error) {
          console.error('Error generating download URL:', error);
          // Handle error, e.g., show a message to the user
        }
      };
  
    return (
      <div className="w-full h-full bg-gradient-to-b from-secondary to-primary py-10 grid lg:grid-cols-2 md:sm:grid-cols-1 justify-items-center">
        <div className='w-[230px] h-[350px] pb-6'>
            <img src={book.thumbnailFile} className="w-full h-full" />
            <div className='text-start py-2'>
                <h3 className='font-semibold text-xl text-center text-pink-700'>{book.title}</h3>  
            </div>
        </div>
        <div className='px-6'>
            <p className='font-bold text-3xl py-4 text-gray-200'>ខ្លះៗអំពីសៀវភៅ​ | About the Book</p>
            <h3 className='w-full h-[150px] overflow-y-scroll mb-8 py-2 text-gray-300'>{book.description}</h3>
            <p className='text-gray-400 font-bold py-2'>អ្នកនិពន្ធ ​(Author) : <span className='text-pink-700'>{book.author}</span></p>
            <p className='text-gray-400 font-bold py-2'>ប្រេភេទសៀវភៅ (Type of Book) : <span className='text-pink-700'>{book.category}</span></p>
            <button onClick={() => downloadFile(`books/${book.bookFile}`)} className='text-gray-300 px-3 py-2 bg-pink-700 my-3 font-bold flex justify-center items-center gap-2'> <FaFilePdf className='text-secondary'/> Download Book</button>
        </div>
      </div>
    );
  };
  
  export default BookDetails;
  