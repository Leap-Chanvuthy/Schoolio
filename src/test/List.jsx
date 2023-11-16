import React, { useEffect, useState } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db, auth } from '../config/firebase'; // Import your Firebase configuration

const List = () => {
  const [bookData, setBookData] = useState(null);
  const [ownerEmail, setOwnerEmail] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        // Assuming you have a way to get the bookId (e.g., from the route)
        const bookId = 'your_book_id_here';

        // Query to get the book details
        const bookQuery = query(collection(db, 'books'), where('userId', '==', auth.currentUser.uid));
        const bookQuerySnapshot = await getDocs(bookQuery);

        // Find the book with the specified ID
        const book = bookQuerySnapshot.docs.find((doc) => doc.id === bookId);

        if (book) {
          const bookData = book.data();
          setBookData(bookData);

          // Get owner's email using the userId
          const ownerQuery = query(collection(db, 'users'), where('userId', '==', bookData.userId));
          const ownerQuerySnapshot = await getDocs(ownerQuery);
          const owner = ownerQuerySnapshot.docs[0].data();
          setOwnerEmail(owner.email);
        } else {
          console.error('Book not found');
        }
      } catch (error) {
        console.error('Error fetching book details', error);
      }
    };

    fetchBookDetails();
  }, []);

  if (!bookData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{bookData.title}</h2>
      <p>Author: {bookData.author}</p>
      <p>Description: {bookData.description}</p>
      <p>Posted by: {ownerEmail}</p>
    </div>
  );
};

export default List;
