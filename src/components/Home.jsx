import styles from '../styles/home.module.css';
import { BsFacebook, BsLinkedin, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs';

const Home = () => {
  return (
    <div className={styles.home}>
      <nav>
        <img src="/public/img/logo.png" alt="" width="50px"/>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Education</li>
          <li>Work</li>
          <li>Experience</li>
          <li>Contact</li>  
        </ul>
      </nav>
      <div>
        <p>Hi There, I'm Jigar Sable</p>
        <p>I Am Into Web Development</p>
        <button>About me</button>
        <ul>
          <li>
            <BsLinkedin />
          </li>
          <li>
            <BsGithub />
          </li>
          <li>
            <BsTwitter />
          </li>
          <li>
            <BsInstagram />
          </li>
          <li>
            <BsFacebook />
          </li>
        </ul>
      </div>  
      <div>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Home;