import "./About_Partners.scss";
import Heading from "../../components/Headings/Heading";

const AboutPartners = () => {
  document.title = "Project 3 Fusion | About Partners";

  return (
    <div className="pt-16 min-h-screen" >
      <Heading heading="PARTNERS"></Heading>

      <div className=" m-10 lg:max-w-[80%] md:w-[85%] w-[94%] bg-gray-900 rounded-3xl p-5 py-10 mx-auto flex flex-col md:py-[20]   sm:flex-row  " >
        <div className="m-2 basis-[60%] px-2 hover:scale-95 duration-1000 ">
          <h2 className=" text-4xl px-2 back animate-bounce  ">ALGORAND</h2>
          <div class="w-48 mb-5 mt-1 h-1 bg-pink-500 "></div>
          <p  >
          This project is an experimental project to see the limits of blockchain gaming.
          As a team of three people, we open sourcely develop a web3 game development kit
          that enables web3 game developers to build more complex web3 games. The real 
          methodolgy behind is creating a validator, player and smart contract trio whose
          connectivity level can be adjusted before deploying the contract related to the
          speed of the network, complexity of the game etc. This means, validator can be
          in full, half or little contact with smart contract. Also keep in mind that what
          we call validator, is a game server with specific web3 software embeded to it. 
          </p>
        </div>
        <div className="m-2 basis-[40%] sm:px-5  py-2 px-2 overflow-hidden rounded-xl lg:mt-0 md:mt-0 mt-5 " d>
          <img
            src="https://algorand.com/static/algorand-og-image-98d634bc4a6f00c455b35830674ae96b.png"
            className="rounded-xl w-full hover:scale-105 duration-1000 shadow-xl hue-rotate-30 "
          ></img>
        </div>
      </div>

      <div className=" m-10 lg:max-w-[80%] md:w-[85%] w-[94%] bg-gray-900 rounded-3xl p-5 py-10 mx-auto flex flex-col md:py-[80]   sm:flex-row   ">
      <div className="m-2 basis-[40%] sm:px-5  py-2 px-2 overflow-hidden rounded-xl lg:mb-0 md:mb-0 mb-10  ">
          <img
            src="https://www.altcoinbuzz.io/wp-content/uploads/2022/01/what-is-near-protocol.jpg"
            className="rounded-xl w-full hover:scale-105 duration-1000 shadow-xl hue-rotate-30 "
          ></img>
        </div>

        <div className="m-2 basis-[60%] px-2 hover:scale-95 duration-1000 ">
          <h2 className=" text-4xl px-2 back animate-bounce  ">NEAR</h2>
          <div class="w-24 mb-5 mt-1 h-1 bg-pink-500 "></div>
          <p  >
          This project is an experimental project to see the limits of blockchain gaming.
          As a team of three people, we open sourcely develop a web3 game development kit
          that enables web3 game developers to build more complex web3 games. The real 
          methodolgy behind is creating a validator, player and smart contract trio whose
          connectivity level can be adjusted before deploying the contract related to the
          speed of the network, complexity of the game etc. This means, validator can be
          in full, half or little contact with smart contract. Also keep in mind that what
          we call validator, is a game server with specific web3 software embeded to it. 
          </p>
        </div>
      </div>

      <div className=" m-10 lg:max-w-[80%] md:w-[85%] w-[94%] bg-gray-900 rounded-3xl p-5 py-10 mx-auto flex flex-col md:py-[80]   sm:flex-row  ">
        <div className="m-2 basis-[60%] px-2 hover:scale-95 duration-1000 ">
          <h2 className=" text-4xl px-2 back animate-bounce  ">Edu DAO</h2>
          <div class="w-40 mb-5 mt-1 h-1 bg-pink-500 "></div>
          <p  >
          This project is an experimental project to see the limits of blockchain gaming.
          As a team of three people, we open sourcely develop a web3 game development kit
          that enables web3 game developers to build more complex web3 games. The real 
          methodolgy behind is creating a validator, player and smart contract trio whose
          connectivity level can be adjusted before deploying the contract related to the
          speed of the network, complexity of the game etc. This means, validator can be
          in full, half or little contact with smart contract. Also keep in mind that what
          we call validator, is a game server with specific web3 software embeded to it. 
          </p>
        </div>
        <div className="m-2 basis-[40%] sm:px-5  py-2 px-2 overflow-hidden rounded-xl lg:mt-0 md:mt-0 mt-5  ">
          <img
            src="https://pbs.twimg.com/profile_images/1470977630946181122/rXTRvqJV_400x400.jpg"
            className="rounded-xl w-full hover:scale-105 duration-1000 shadow-xl hue-rotate-30 "
          ></img>
        </div>
      </div>

    </div>
  );
};

export default AboutPartners;
