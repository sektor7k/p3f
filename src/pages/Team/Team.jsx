import React from 'react'
import './Team.scss'
import Heading from '../../components/Headings/Heading'
import TeamCard from './TeamCard'



const Team = () => {
  document.title = 'Project 3 Fusion | Team';


  const members = [
    {
      name: 'Can Gök',
      position: 'Game Developer',
      image: './images/can.jpg',
      linkedin: 'https://www.linkedin.com/in/cangok/',
      github: 'https://github.com/cannsky',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com/cannskydev',
      discord: "https://discord.com",
      about: "Experienced Unity Game Developer who previously took many roles including Team Lead. in different type of projects.",
      email: "cangok08@gmail.com",
      id: "0"
    },
    {
      name: 'Ömer Aydın',
      position: 'Blockchain Developer',
      image: './images/omer.png',
      linkedin: 'https://www.linkedin.com/in/%C3%B6mer-ayd%C4%B1n-2b625b229/',
      github: 'https://github.com/sektor7k',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com/sektor7K',
      discord: "https://discord.com",
      about: "My name is ömer I develop Rust, actix-web and Cairo. i am a 3rd year student of software engineering.",
      email: "omeraydin2112@gmail.com",
      id: "1"
    },
    {
      name: 'Last Ceri',
      position: 'Back-End Developer',
      image: './images/ceri.jpg',
      linkedin: 'https://www.linkedin.com',
      github: 'https://github.com',
      instagram: 'https://instagram.com',
      twitter: 'https://www.twitter.com',
      discord: "https://discord.com",
      about: "A web3 enthusiast and an upcoming software engineer.",
      email: "lastceri@gmail.com",
      id: "2"
    },
    {
      name: 'Emre Taş',
      position: 'Full-Stack Developer',
      image: './images/emre.jpg',
      linkedin: 'https://www.linkedin.com/in/emre-ta%C5%9F-154360249/',
      github: 'https://github.com/emretasss',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com/Emretas1459',
      discord: "https://discord.com",
      about: "My name is Emre! I develop myself in the fields of artificial intelligence, blockchain and web development.",
      email: "tas7095@gmail.com",
      id: "3"
    }
  ]

  return (
    <div className='pt-16'>
      <Heading heading="Team"></Heading>
      <div className='my-20 mx-5 flex flex-wrap gap-10 items-center justify-center' id='Team_main'>
        {members.map((member, id) => (
          <TeamCard member={member} key={id} />
        ))}
      </div>
    </div>
  )
}

export default Team