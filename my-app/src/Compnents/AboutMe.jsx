import estus_zach_headshot from '../img/estus_zach_headshot.jpg'
import React from 'react'
export default function AboutMe(props){


    return(
        <div className='container row'>
                <img src={estus_zach_headshot} alt="Headshot" className='col-6 rounded img-fluid'></img>
                <p className='col-6'>
                    Hello there, this is the page where I talk about myself, something that I don't enjoy. 
                    Some other things I dislike long walks with a pebble in my shoe, and hikes without oxygen. 
                    A couple things I actually enjoy doing are disc golf, participating in two Dungeons and Dragons campaigns, and playing video games.
                    Disc golf is such a relaxing activity. It`s a nice time to go outside and just fling some plastic.
                    Its a great rush to see the disc spin, and glide down the hole. A wonderful feeling.
                    Dungeons and dragons is really an excuse to hangout with my friends, and go on make-believe adventures.
                    I am a player in one and the “Dungeon Master” in the other. All around a great time each week.
                    <br></br>
                    <br></br>
                    My coding development journey is a windy, convoluted route. My interest started with a
                    Java class in high school. This little interest bud continued to grow with a more classes in college
                    low level python and C++. I did couple more self taught courses to further my interest. Now, this
                    interest led me to completing a 12-week in person bootcamp covering a full tech stack of 
                    languages; ranging from vanilla JS, React, Django, and Python. After learning front-end and
                    back-end languages, I prefer to work in the back-end. More emphasis on good, logical code.
                </p>

        </div>
    )
}