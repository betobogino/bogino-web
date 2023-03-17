import React from 'react'
import styles from '../../styles/base/app.css';
import About from '../About';
import Education from '../Education';

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
            <Education />
        </div>
    )
}

export default App