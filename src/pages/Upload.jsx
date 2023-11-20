import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, storage } from '../config/firebase';
import { collection, addDoc , doc , getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useState } from 'react';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [PDF, setPDF] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);

  // hanlde errors state
  const [error , setError] = useState("");

  const currentUser = auth.currentUser.uid;

  const handleThumbnailChange = (e) => {
    const selectedThumbnail = e.target.files[0];

    if (selectedThumbnail) {
      setThumbnail(selectedThumbnail);
      setThumbnailPreview(URL.createObjectURL(selectedThumbnail));
    }
  };

  const addBook = async () => {
    try {
        if (!title ) {
            setError("Please fill book title");
            return;
        }
        else if (!category ) {
            setError("Please fill book category");
            return;
        }
        else if (!thumbnail ) {
            setError("Please choose a thumbnail");
            return;
        }
        else if (!PDF ) {
            setError("Please choose your book file");
            return;
        }

      const bookCollection = collection(db, 'books');
      // setup PDF File upload
      if (PDF === null) return;
      const PDFRef = ref(storage, `books/${PDF.name}`);
      await uploadBytes(PDFRef, PDF);

      // setup thumbnail file upload
      if (thumbnail === null) return;
      const thumbnailRef = ref(storage, `thumbnail/${thumbnail.name}`);
      await uploadBytes(thumbnailRef, thumbnail);

      // get download URL for thumbnail
      const thumbnailDownloadURL = await getDownloadURL(thumbnailRef);

      await addDoc(bookCollection, {
        title,
        author,
        description,
        category,
        bookFile: PDF.name,
        thumbnailFile: thumbnailDownloadURL,
        userId: currentUser,
        timestamp: new Date(),
      });

      

      console.log('Book added');
      setTitle('');
      setAuthor('');
      setDescription('');
      setCategory('');
      setPDF(null);
      setThumbnail(null);
      setThumbnailPreview(null);
    } 
    catch (error) {
      console.error('Error uploading the form', error);
    }
  };


  return (
    <div className="w-full h-full bg-gradient-to-b from-secondary to-primary">
      <h3 className="text-center text-2xl font-bold text-gray-400 pt-8 pb-4">Upload and Attach Files</h3>
      <h3 className="text-center text-xl font-bold text-gray-400 pb-4">ចែករំលែកសៀវភៅរបស់អ្នក</h3>
      <div className="flex justify-center items-center">
        <div className="px-4 py-6 md:w-3/4 lg:w-1/2 xl:w-1/3">
          <div className="flex items-center justify-center mb-6">
            <label
              htmlFor="dropzone-file"
              className={`flex flex-col items-center justify-center w-full h-40 md:h-32 lg:h-48 border-2 border-gray-300  border-dashed rounded-lg cursor-pointer hover:bg-primary`}
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-md font-bold text-pink-600">Only PDFs are allowed</p>
              </div>
              <input id="dropzone-file" type="file" onChange={(e) => setPDF(e.target.files[0])} />
            </label>
          </div>
          {/* handle error  */}
          {error && (
              <div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div className="flex justify-center items-center gap-3">
                  {/* <span className="font-medium text-center">Invalid register</span> */}
                  <p>{error}</p>
                </div>
              </div>
            )}

          <div className="flex flex-col text-start py-2">
            <label className="block mb-2 text-sm font-medium text-gray-400">ចំណងជើងសៀវភៅ Book Title (Require)</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col text-start py-2">
            <label className="block mb-2 text-sm font-medium text-gray-400">ម្ចាស់សៀវភៅ Author (Optional)</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="flex flex-col text-start py-2">
            <label className="block mb-2 text-sm font-medium text-gray-400">អំពីសៀវភៅ Description (Optional)</label>
            <input
              className="bg-gray-50 border h-28 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col text-start py-2">
            <label className="block mb-2 text-sm font-medium text-gray-400">ប្រភេទសៀវភៅ​ Category (Require)</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col text-start py-2">
            <label className="block mb-2 text-sm font-medium text-gray-400">គម្របសៀវភៅ​ Thumbnail (Require)</label>
            <input
              className="text-gray-400"
              type="file"
              onChange={handleThumbnailChange}
              required
            />
            {thumbnailPreview && (
              <img
                src={thumbnailPreview}
                alt="Thumbnail Preview"
                className="mt-2 w-32 h-32 object-cover"
              />
            )}
          </div>
          <div className="py-5 font-bold">
            <button onClick={addBook} className="border-2 border-gray-600 px-8 py-2 bg-gradient-to-r from-purple-500 to-pink-500">
              Add Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
