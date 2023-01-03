
import {useState, useRef} from 'react';
import Textbox from './Textbox';
import AboutMe from './AboutMe';
import Projects from './Projects'

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
        return <Projects />
    } else if(props.page === 'About'){
        return (
            <AboutMe />
        )
    }
}