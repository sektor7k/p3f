import './About.scss'
import Heading from '../../components/Headings/Heading'

const About = () => {

  document.title = 'Project 3 Fusion | About';

  return (
    <div className='pt-16 min-h-screen'>
      <Heading heading="ABOUT"></Heading>
      <div className="paragraph-body">
        <p data-aos="fade-up" >
        This project is an experimental project to see the limits of blockchain gaming. As a team of three people, we open sourcely develop a web3 game development kit that enables web3 game developers to build more complex web3 games. The real methodolgy behind is creating a validator, player and smart contract trio whose connectivity level can be adjusted before deploying the contract related to the speed of the network, complexity of the game etc.  
        </p>
        
        <p data-aos="fade-up" >
        This means, validator can be in full, half or little contact with smart contract. Also keep in mind that what we call validator, is a game server with specific web3 software embeded to it.
        </p>


        <p data-aos="fade-up" >
        There is an important thing to note, it is impossible to place a complex game to the blockchain right now due to the speeds. This project includes an example moba game as starting point which takes 7000 inputs per player in each game which leads to 70000 inputs in total game. Here is the great question: Can a blockchain network handle 70000 clicks just for a single game? Maybe yes, maybe not. We'll see at the future. That's why, keep in mind that if you increase your complexity way more higher, creating a full-chain blockchain game seems to be impossible right now. 
        </p>
        <p data-aos="fade-up" >
        That's why, we use a random validator which is assigned to the network and giving its credentials to the smart contract. Later, smart contract informs players to connect to the validator to play the game. 
        </p>
        <p data-aos="fade-up" >
        What we want to imply that, with using a validator we are able to give heavy work to the validator while smart contract is handling the data storage and basic calculations. This validator can be full, half or small chain connected validator. Here is a quick diagram for everyone to understand the simple architecture of project 3 fusion
        </p>
      </div>
    </div>
  )
}

export default About
