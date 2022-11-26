import './App.css';
import Navbar from './Navbar';
import Header from './Header';

import {useState} from 'react';

export default function Manager(props){
    const[page, setPage] = useState('Home');
    return (
        <div>
            <Header />
            <Navbar />
        </div>
    );
}
