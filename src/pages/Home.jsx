import Book from "../components/Books/Books";
import Navbar from "../components/layouts/Navbar";


const Home = () => {
    return ( 
        <div className="w-full h-full bg-gradient-to-b from-secondary to-primary pb-10">
           <div className="flex lg:flex-row sm:flex-col justify-between items-center gap-4 px-16 text-gray-400 pb-16">
                {/* left */}
                <div>
                    <h1 className="font-bold text-4xl py-5">We share books to the world . Your Gateway to a World of Knowledge !</h1>
                    <p className="text-lg">ចែករំលែកសៀវភៅដល់មនុស្សគ្រប់គ្នាក្នុងគោលបំណងអភិវឌ្ឈន៍ចំណេះដឹងតាមបច្ចេកវិទ្យាឌីជីថល</p>
                    <button className="bg-gradient-to-r from-primary to-pink-500 px-4 py-1 font-bold my-10 rounded-sm text-white">Explore</button>
                </div>
                {/* right */}
                <div className="relative hidden md:block lg:md:visible sm:hidden">
                    <div>
                        <img src="https://summer.harvard.edu/wp-content/uploads/sites/7/2022/06/how-to-study-like-a-harvard-student.jpg" className="w-[583px] lg:flex md:sm:hidden" />
                    </div>
                    <div className="absolute top-[60%] right-[25%]">
                        <img src="https://eccles.utah.edu/wp-content/uploads/2015/04/Study-Group-web.jpeg" className="w-[283px] rounded-md lg:flex md:sm:hidden" />
                    </div>
                </div>
           </div>
           <Book/>
        </div>
     );
}
 
export default Home;