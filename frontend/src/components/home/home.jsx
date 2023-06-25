import Navbar from "../shared/navbar/navbar";
import "./home.css";

function Home() {

  const pakages = [
    {
      "investment": 10000,
      "return": 80000,
      "duration": 3
    },
    {
      "investment": 20000,
      "return": 120000,
      "duration": 3
    },
    {
      "investment": 30000,
      "return": 230000,
      "duration": 3
    },
    {
      "investment": 50000,
      "return": 300000,
      "duration": 3
    },
    {
      "investment": 80000,
      "return": 450000,
      "duration": 5
    },
    {
      "investment": 100000,
      "return": 550000,
      "duration": 5
    }
  ]

  return (
    <div className="home-bg">
      <Navbar />
      <section className="relative mt-8 banner-section h-screen">
        <div className="overlay-content text-white absolute tablet-1:w-full">
          <h2 className="text-6xl sm:text-5xl text-center tablet-1:w-10/12 m-auto tablet-4:text-5xl tablet-4:mt-10">Votre voyage vers la richesse commence maintenant</h2>
          <p className="text-xl sm:text-3xl ml-6 sm:ml-16 mt-6 tablet-1:mt-6 sm:mt-10 tablet-1:text-center tablet-1:w-10/12 tablet-1:m-auto">Explorez le monde de la crypto-monnaie 
            et découvrez des possibilités infinies
            Investissez intelligemment, croissez 
            rapidement et récoltez les récompenses 
            du boom des crypto-monnaies
          </p>
        </div>
      </section>
      <section className="">
        <div className="bg-white flex m-auto justify-between border w-10/12 tablet-1:w-full pb-10">
          <img src="control.png" className="ad" />
          <div className="">
            <p className="text-xl w-10/12 shadow-lg px-5 py-5 rounded-md mt-20 m-auto tablet-2:mt-10 tablet-2:text-sm tablet-3:mt-0 tablet-3:w-full">
              Stay in control of your crypto investments with our intuitive portfolio
              management dashboard. Track your holdings, monitor performance, and make
              data-driven decisions to optimize your investment strategy
            </p>
          </div>
        </div>
        <div className="bg-white flex m-auto justify-between border w-10/12 tablet-1:w-full pb-10">
          <div className="">
            <p className="text-xl w-10/12 shadow-lg px-5 py-5 rounded-md mt-20 m-auto tablet-2:mt-10 tablet-2:text-sm tablet-3:mt-0 tablet-3:w-full">
              Your security is our top priority. We employ industry-leading security measures
              to safeguard your personal information and digital assets, ensuring a safe and
              trustworthy investment environment.
            </p>
          </div>
          <img src="security.png" className="ad" />
        </div>
        <div className="bg-white flex m-auto justify-between border w-10/12 tablet-1:w-full">
          <img src="community.png" className="w-1/4" />
          <div className="">
            <p className="text-xl w-10/12 shadow-lg px-5 py-5 rounded-md mt-20 m-auto tablet-2:mt-10 tablet-2:text-sm tablet-3:mt-0 tablet-3:w-full">
              Create an account and join our thriving community of crypto investors.
              Sign up in minutes to unlock exclusive features and personalized investment opportunities.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-32 bg-white">
        <h2 className="home-bg text-white w-fit text-5xl m-auto px-20 pb-6 rounded-b-lg tablet-3:text-3xl tablet-3:text-center">NOS FORFAITS</h2>
        <div className="flex mt-10 justify-evenly flex-wrap text-center">
          {pakages.map(pack=>{
            return(<div className="package border-1 hover:shadow-lg hover:cursor-pointer px-10 mb-10 py-10 rounded-lg shadow-md">
                <div className="text-3xl font-medium tablet-4:text-2xl">{pack["investment"]}F =&gt; <span className="text-green-600">{pack["return"]}F</span></div>
                <div>{pack["duration"]}HRS</div>
                <button className="mt-5 text-lg border-2 border-green-300 px-8 py-2 rounded-md bg-green-100 hover:bg-green-200">SUBSCRIBE</button>
            </div>)
          })}
        </div>
      </section>
      <section className="mt-32 bg-white pb-10">
        <h2 className="home-bg text-white w-fit text-5xl m-auto px-20 pb-6 rounded-b-lg tablet-3:text-3xl tablet-3:text-center">METHODE DE PAYMENT</h2>
        <p className="mt-10 text-center m-auto text-lg">
          Choisissez votre mode de paiement <br/>
          préféré et commencez <br/>
           à investir dès aujourd'hui !</p>
        <div className="payment flex w-full justify-evenly flex-wrap mt-10">
          <img src="orange.png" alt="" />
          <img src="mtn.png" alt="" />
          <img src="wu.png" alt="" />
        </div>
        </section>
        <section className="mt-32 text-center pb-32">
          <h2 className="text-white text-5xl">Qu'est-ce que tu attends ?</h2>
          <button className="mt-12 m-auto bg-white text-3xl w-1/2 py-8 font-medium tablet-4:w-3/4">Commencer !</button>
        </section>
    </div>
  );
}

export default Home;
