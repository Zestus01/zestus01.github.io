
import Navbar from './Navbar';
import Header from './Header';

import React, {useState} from 'react';

export default function Manager(props){
    const[page, setPage] = useState('Home');
    return (
        <div>
            <Header setPage={setPage}/>
            <Navbar page={page} setPage={setPage}/>
        </div>
    );
}
