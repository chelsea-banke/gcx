import Navbar from "../shared/navbar/navbar";
import "./home.css";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <section className="relative mt-8">
        <img src="banner.png" alt="" className="w-full" />
        <div className="w-full h-full absolute top-0 banner-overlay">
          <div className="overlay-content mt-12 sm:mt-48 text-white">
            <h2 className="text-3xl sm:text-5xl text-center">Votre voyage vers la richesse commence maintenant</h2>
            <p className="text-lg sm:text-3xl ml-6 sm:ml-16 mt-6 sm:mt-10">Explorez le monde de la crypto-monnaie 
              et découvrez des possibilités infinies
              Investissez intelligemment, croissez 
              rapidement et récoltez les récompenses 
              du boom des crypto-monnaies
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="w-full flex flex-col lg:flex-row justify-between">
          <img src="control.png" className="w-1/12 sm:w-auto m-auto sm:mt-0" />
          <div className="w-full sm:w-7/12">
            <p className="m-auto text-lg sm:text-xl border-2 border-gray-600 py-4 sm:py-8 px-6 sm:px-20 sm:w-8/12 mt-6 sm:mt-20 rounded-md">
              Stay in control of your crypto investments with our intuitive portfolio
              management dashboard. Track your holdings, monitor performance, and make
              data-driven decisions to optimize your investment strategy
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between">
          <div className="w-full sm:w-7/12">
            <p className="m-auto text-lg sm:text-xl border-2 border-gray-600 py-4 sm:py-8 px-6 sm:px-20 sm:w-8/12 mt-6 sm:mt-20 rounded-md">
              Your security is our top priority. We employ industry-leading security measures
              to safeguard your personal information and digital assets, ensuring a safe and
              trustworthy investment environment.
            </p>
          </div>
          <img src="security.png" className="w-1/2 sm:w-auto m-auto mt-6 sm:mt-14" />
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between">
          <img src="community.png" className="w-1/2 sm:w-auto m-auto ml-2 sm:ml-0" />
          <div className="w-full sm:w-7/12">
          <p className="m-auto text-lg sm:text-xl border-2 border-gray-600 py-4 sm:py-8 px-6 sm:px-20 sm:w-8/12 mt-6 sm:mt-52 rounded-md">
              Create an account and join our thriving community of crypto investors.
              Sign up in minutes to unlock exclusive features and personalized investment opportunities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
