import "./navbar.css"

function Navbar() {
    return (
      <nav className="w-screen fixed top-0 z-10 bg-white flex justify-between py-3 shadow-md">
        <div className="flex items-center mx-5 sm:mx-10 tablet-4:mx-1">
          <img src="gcx-logo.png" className="h-10 sm:h-12" />
          <div className="text-xl sm:text-3xl font-medium text-green-700 ml-3 sm:ml-8 tablet-4:text-sm">Contactez nous</div>
        </div>
        <div className="flex items-center mx-5 sm:mx-10 mt-3 sm:mt-0 tablet-4:text-sm tablet-4:mx-1 tablet-4:mt-1">
          <button className="px-6 py-2 sm:px-8 sm:py-4 mr-3 border border-gray-700 rounded-md tablet-4:mr-1 tablet-4:px-4">Connexion</button>
          <button className="px-6 py-2 sm:px-8 sm:py-4 border border-gray-700 rounded-md tablet-4:px-4">S'inscrire</button>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  