import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Textbox from './Textbox';
import {useState, useRef, useEffect} from 'react'

export default function Manager(props){

    return (
        <div>
            <Header />
            <Navbar />
            <Textbox path={'./Blogs/week1.md'}/>
        </div>
    );
}
