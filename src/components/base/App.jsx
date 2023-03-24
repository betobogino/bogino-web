import styles from '../../styles/base/app.css';

import About from '../About';
import Contact from '../Contact';
import Header from '../Header';
import Home from '../Home';
import Skills from '../Skills';
import Work from '../Work';
import Footer from '../Footer';

const App = () => {
    return (
        <div>
            <Header />
            <Home />
            <About />
            <Skills />
            <Work />
            <Contact />
            <Footer />
        </div>
    )
}

export default App