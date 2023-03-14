import React from 'react'
import styles from '../../styles/base/app.css';
import About from '../About';

import Header from '../Header';
import Home from '../Home';
import Skills from '../Skills';


const App = () => {
    return (
        <div>
            <Header />
            <Home />
            <About />
            <Skills />
        </div>
    )
}

export default App