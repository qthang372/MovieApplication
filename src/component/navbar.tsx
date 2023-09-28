

export const Navbar = () => {
    return (
        <div className="w-full h-14 bg-green-700 flex items-center z-10" >
            <a href="#" className="hover:cursor-pointer hover:text-red-600 text-white text-sm lg:text-lg xl:text-xl 2xl:text-2xl" style={{ marginLeft: "10%" }}>Home</a>
            <a href="#" className="hover:cursor-pointer hover:text-red-600 text-white text-sm lg:text-lg xl:text-xl 2xl:text-2xl" style={{ marginLeft: "3%" }}>Top Films</a>
            <a href="#" className="hover:cursor-pointer hover:text-red-600 text-white text-sm lg:text-lg xl:text-xl 2xl:text-2xl" style={{ marginLeft: "3%" }}>About</a>
            <button className="bg-red-700 text-sm hover:bg-green-500 lg:text-lg xl:text-xl 2xl:text-2xl px-2 py-0.5 ml-auto" >Sign In</button>
            <button className="bg-red-700 text-sm hover:bg-green-500 lg:text-lg xl:text-xl 2xl:text-2xl px-2 py-0.5 ml-5" style={{ marginRight: "10%" }}>Sign Up</button>
        </div>

    );
};