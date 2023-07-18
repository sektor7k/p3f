import React from 'react'
import Heading1 from '../Headings/Heading1'
import Heading2 from '../Headings/Heading2'
import { Card1, Card2, HighlightCard } from '../Cards/Card'
import { BsFillPeopleFill, BsFillCalendarEventFill } from 'react-icons/bs'
import { RiProjector2Fill } from 'react-icons/ri'
import { AiFillProject } from 'react-icons/ai'

const About = () => {

  const aboutData = [
    {
      id: "0",
      title: "Blade",
      description: "A noble and proud warrior, Blade fights as a member of the Indomitable Vanguard. He is loved by his friends and respected by his enemies, not least because he belongs to the Crownguard family, a family tasked with protecting Demacia and its ideals.",
      image: "./images/Garen.png",
    },
    {
      id: "1",
      title: "Lyra",
      description: "Lyra, the Iceborn war-mother of the Avarosa Tribe, commands the largest horde in the north. Stoic, intelligent, idealistic, but equally uncomfortable in her role as leader, the Frost Archer uses her bloodline's ancestral magic to command a bow of True Ice.",
      image: "./images/Ashe.png",
    },
    {
      id: "2",
      title: "Helios",
      description: "Extremely cruel and ruthless, Helios is the leader of the Order of the Shadow, which he founded to drive the Noxian invaders from their lands by weaponizing Ionia's traditions of magic and martial arts.",
      image: "./images/zed.png",
    }
  ]


  return (
    <div>
      
      <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
        <HighlightCard icon={<BsFillPeopleFill className='text-sky-500' size={30} />} type={"Active player"} data={100} />
        <HighlightCard icon={<AiFillProject className='text-sky-500' size={30} />} type={"Site visit"} data={500} />
        <HighlightCard icon={<RiProjector2Fill className='text-sky-500' size={30} />} type={"Match played"} data={20} />
        
      </div>

      <Heading1 details={"With over 140 champions to choose from, you can find the one that fits your playstyle. Master one or master them all."} text1={"Champion"} text2={"Select"} />
      <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
        {
          aboutData.map((data) => (
            <Card1 key={data.id} title={data.title} description={data.description} image={data.image} />
          ))
        }
      </div>


      <Heading2 text1={"P3F"} text2={"MAP"} />
      <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
        <Card2 link="#" title="Endless Abyss" image="./images/map1.png" />
        <Card2 link="#" title="Crystal Cliff" image="./images/map2.png" />
        <Card2 link="#" title="Ominous Woods"  image="./images/map3.png" />
      </div>
    </div>
  )
}

export default About