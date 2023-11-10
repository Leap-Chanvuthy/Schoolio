import { useEffect, useState } from "react";

const BookList = () => {
    const Books = [
        {
          "id": 1,
          "title": "Whispers of Eternity",
          "category": "Fantasy",
          "author": "Elena Nightshade",
          "description": "A tale of magic and destiny as two worlds collide, setting in motion a prophecy that could either save or doom both realms.",
          "image_url": "https://m.media-amazon.com/images/I/711cV5xYzqL._AC_UF1000,1000_QL80_.jpg"
        },
        {
          "id": 2,
          "title": "Shadows in the Mist",
          "category": "Mystery",
          "author": "Jonathan Blackwell",
          "description": "A detective's pursuit of a serial killer takes a supernatural turn when the fog hides secrets that refuse to stay buried.",
          "image_url": "https://m.media-amazon.com/images/I/51CD8blTsxL._AC_UF894,1000_QL80_.jpg"
        },
        {
          "id": 3,
          "title": "Chronicles of the Celestial War",
          "category": "Science Fiction",
          "author": "Xander Starcaster",
          "description": "In a galactic war, a young pilot discovers ancient artifacts that may hold the key to ending the conflict, but at a great cost.",
          "image_url": "https://th.bing.com/th/id/OIP.d-RDT3t0CfH9xpUTDYQI5QHaLG?pid=ImgDet&rs=1"
        },
        {
          "id": 4,
          "title": "A Symphony of Silence",
          "category": "Drama",
          "author": "Isabella Harmony",
          "description": "In a world where words have power, a mute musician struggles to navigate a society where silence is both a curse and a gift.",
          "image_url": "https://www.royalroadcdn.com/public/covers-large/celestial-chronicles-aabalaew-hi.jpg?time=1677661065"
        },
        {
          "id": 5,
          "title": "Echoes of the Lost City",
          "category": "Adventure",
          "author": "Nathan Drake",
          "description": "An archaeologist's quest for a legendary lost city becomes a race against time as rival factions seek its ancient and dangerous power.",
          "image_url": "https://m.media-amazon.com/images/I/41J7bLo3zuL.jpg"
        },
        {
          "id": 6,
          "title": "The Enchanted Labyrinth",
          "category": "Young Adult",
          "author": "Luna Evergreen",
          "description": "Four teenagers discover a magical labyrinth that not only tests their friendship but also holds the key to saving their town from a dark force.",
          "image_url": "https://m.media-amazon.com/images/I/41nZZ1coedL.jpg"
        },
        {
          "id": 7,
          "title": "Threads of Destiny",
          "category": "Historical Fiction",
          "author": "Marcus Archer",
          "description": "Set against the backdrop of World War II, the lives of three strangers intertwine as they navigate love, loss, and the inexorable pull of fate.",
          "image_url": "https://m.media-amazon.com/images/M/MV5BZDU4MWRiOGQtMDRiNS00NGE0LTgyZGItOTk1YzJhOTRhMjAzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTE2NzA0Ng@@._V1_.jpg"
        },
        {
          "id": 8,
          "title": "Infinite Reflections",
          "category": "Romance",
          "author": "Sophie Heartfield",
          "description": "A love story that transcends time and space, where two souls find each other in different dimensions, bound by an unbreakable connection.",
          "image_url": "https://qph.cf2.quoracdn.net/main-qimg-2bbaa0330f4fbc55fbee617abc2eca44"
        },
        {
          "id": 9,
          "title": "City of Whispers",
          "category": "Thriller",
          "author": "Dexter Nightshade",
          "description": "In a city where secrets are currency, a journalist unravels a conspiracy that goes deeper than he could have ever imagined.",
          "image_url": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1647306762i/60620317.jpg"
        },
        {
          "id": 10,
          "title": "Beyond the Horizon",
          "category": "Science Fiction",
          "author": "Aria Stardust",
          "description": "Exploring the mysteries of the cosmos, a group of astronauts stumbles upon a cosmic anomaly that challenges their understanding of reality.",
          "image_url": "https://g.christianbook.com/g/slideshow/1/134902/main/134902_1_ftc.jpg"
        }
      ]
      

    const [books , setbooks] = useState([]);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setbooks(Books);
        }, 1000);
        setLoading(false);
        if(Books.length == 0){
            return <div><h4>No books</h4></div>
        }
    },[])


    return ( 
        <div>
          <div className="grid justify-items-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 py-10 px-12">
              {loading && <h2 className="text-gray-400">Loading ....</h2>}
              { books && books.map((book) => (
              <div key={book.id}>
                  <img src={book.image_url} className="w-[166px] h-[237px]" />
                  <h4 className="text-center text-gray-400 font-bold w-[166px] h-[71px]">{book.title}</h4>
              </div>
              ))}
          </div>
          {/* Pagination */}
          <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-8 text-sm justify-center">
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Previous</span>
                  <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
              </li>
              <li>
                <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Next</span>
                  <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
     );
}
 
export default BookList;