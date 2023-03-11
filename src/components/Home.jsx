import styles from '../styles/home.module.css';


import Header from './Header';

const Home = () => {
  return (
    <div className={styles.home}>
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