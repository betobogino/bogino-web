import React from 'react'
import styles from '../../styles/base/app.css';
import About from '../About';

import Header from '../Header';
import Home from '../Home';


const App = () => {
    return (
        <div>
            <Header />
            <Home />
            <About />
        </div>
    )
}

export default App