function Navbar(){
    return (
        <nav className="flex flex-wrap w-screen justify-between py-3 border-b border-gray-700">
            <div className="flex ml-5">
                <img src="gcx-logo.png" className="" />
                <div className="text-3xl mt-5 font-medium text-green-700 ml-8">Contactez nous</div>
            </div>
            <div className="flex mr-5 text-xl">
                <button className="px-10 py-4 mt-2 mr-3 border border-gray-700 rounded-md h-fit">Connexion</button>
                <button className="px-10 py-4 mt-2 border border-gray-700 rounded-md h-fit">S'inscrir</button>
            </div>
        </nav>
    )
}

export default Navbar