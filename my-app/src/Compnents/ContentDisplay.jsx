import Textbox from './Textbox';
import AboutMe from './AboutMe';
import Projects from './Projects'
import React from 'react'

export default function ContentDisplay(props){
    if(props.page === 'Blogs'){
        return <Textbox />
    } else if(props.page === 'Home'){
        return (
            <div>
                <h4 className='text-white display-6'>WELCOME</h4>
                <p className='text-white'>
                    This is my portfolio website where I showcase my amazing ability in webpage development. It is still a work in progress. Most of the content is filled out, but as you can see it is lacking in the style department. Alas, those style skills elude me. I am regularly updating the content/style so come back in a month to see whats changed.
                </p>
            </div>
        )
    } else if(props.page === 'Projects'){
        return <Projects />
    } else if(props.page === 'About'){
        return (
            <AboutMe />
        )
    }
}