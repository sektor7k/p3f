import React from 'react'
import Heading1 from '../Headings/Heading1';
import { EventCard } from '../Cards/Card';
import { Link } from 'react-router-dom';
import { RxArrowRight } from 'react-icons/rx';

const Event = () => {
    const events = [
        {
            id: 0,
            name: "Liandry's Agony",
            image: "./images/item1.png",
            tag: "Attack",
            description: 'Abilities burn the enemy, dealing 60 (+10% Ability Power) (+ 4% of the target s maximum health) Magic Damage for +4 seconds and reducing their magic resistance by 5% per second for 4 seconds (max 25%).',
            date: "3400",
            time: "+80 ",
            venue: "+600",
            link: "+25"
        },
        {
            id: 1,
            name: "Active - Burning Arrow",
            image: "./images/item2.png",
            tag: "Magic",
            description: "You dash in the target direction, launching rockets that deal 250 to 350 Magic Damage at levels 1-18. You then gain 75% Movement Speed for 1 second (40 second cooldown) as you move towards champions.",
            date: "3200 ",
            time: "+80",
            venue: "+250",
            link: "+15"
        },
        {
            id: 2,
            name: "Triple Force",
            image: "./images/item3.png",
            tag: "Defense",
            description: "Your attacks grant you 25 Movement Speed and (5% Base Attack Power) Base Attack Power for 3 seconds. The base attack power increase can stack up to 6 times.",
            date: "3333 ",
            time: "+200 ",
            venue: "Meghnad Saha Hall",
            link: "+15"
        }]


    return ( 
        <div>
            <Heading1 details={"P3F items are items in the game that provide different powers and abilities to champions."} text1={"Magnificent and Legendary"} text2={"Items"} />
            <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
                {events.map((event, id) => (
                    <EventCard data={event} key={id} />
                ))}
            </div>

            
        </div>
    )
}

export default Event;