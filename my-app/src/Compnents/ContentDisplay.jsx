
import {useState, useRef} from 'react';
import Textbox from './Textbox'; 

export default function ContentDisplay(props){
    if(props.page === 'Blogs'){
        return <Textbox />
    } else if(props.page === 'Home'){
        return (
            <div>
                <h4 className='text-white display-6'>WELCOME</h4>
                <p className='text-white'>
                    This is my portfolio website where I showcase my amazing abilitiy in webpage developement. It is still a work in progress. Come back around January 14th for the final product!
                </p>
            </div>
        )
    } else if(props.page === 'Projects'){
        return <h2 className='text-white'>TEST CONTENT</h2>
    } else if(props.page === 'About'){
        return (
            <p className='text-white'>
                Hello there, this is the page where I talk about myself. 
                My most favorite activity, ever. A couple things I actually enjoy doing are disc golf, participating in two Duengeons and Dragons campaigns, and playing video games.
                I dislike long walks with a pebble in my shoe, and hikes without oxygen. 
                Disc golf is such a relaxing activity. It`s a nice time to go outside and play catch with an absent father.
                Its a great rush to see the disc spin, and glide down the hole. A wonderful feeling.
                Duengeons and dragons is really an excuse to hangout with my friends, and go on make-believe adventures.
                I am a player in one and the “Dungeon Master” in the other. All around a great time each week.
                My coding developement journey is a windy, convuluted route. My interest started with a
                Java class in high school. This little interest bud continued to grow with a more classes in college
                low level python and C++. I did couple more self taught courses to further my interest. Now, this
                interest led me to completing a 12-week in person bootcamp covering a full tech stack of 
                languages; ranging from vanilla JS, React, Django, and Python. After learning front-end and
                back-end languages, I prefer to work in the back-end. More emphasis on good, logical code.
            </p>
        )
    }
}