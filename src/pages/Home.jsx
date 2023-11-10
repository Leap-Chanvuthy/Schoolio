import Book from "../components/Books/Books";

const Home = () => {
    return ( 
        <div className="w-full h-full bg-gradient-to-b from-secondary to-primary py-10">
           <div className="flex lg:flex-row sm:flex-col justify-between items-center gap-4 px-16 text-gray-400">
                {/* left */}
                <div>
                    <h1 className="font-bold text-4xl py-5">We share books to the world . Your Gateway to a World of Knowledge !</h1>
                    <p className="text-md">Simply upload your PDF file, add a captivating description, and let your words reach a global audience.</p>
                    <button className="bg-gradient-to-r from-primary to-pink-500 px-4 py-1 font-bold my-10 rounded-sm text-white">Explore</button>
                </div>
                {/* right */}
                {/* <div className="md:sm:hidden"/>                    <div>
                    <div><img src="https://summer.harvard.edu/wp-content/uploads/sites/7/2022/06/how-to-study-like-a-harvard-student.jpg" className="w-[583px]" /></div>
                    <div><img src="https://eccles.utah.edu/wp-content/uploads/2015/04/Study-Group-web.jpeg" className="w-[283px] absolute bottom-[20%] right-[10%] top-[50%] rounded-md" /></div>
                </div> */}
           </div>
           <Book/>
        </div>
     );
}
 
export default Home;