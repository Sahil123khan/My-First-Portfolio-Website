import "../Css/Header.css"
import Insta from "../assets/Images/instagram.png"
import twitter from "../assets/Images/twitter.png"
import github  from "../assets/Images/github.png"
import linkedin from "../assets/Images/linkedin.png"
import Myimag from "../assets/Images/MyImage.jpg"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from "react"



const Header = () => {

    const myfinction = () => {
        let x = document.getElementById('MyMenu')
        if(x.style.display == "block"){
            x.style.display = "none"
        }else{
            x.style.display = "block" 
        }
    }

    const [currentSection, setCurrentSection] = useState('Home');

        const renderSection = () => {
    switch (currentSection) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

    return (
        <header className="header background">
            <nav   className="nav">
                <ul id="MyMenu"> 
                    <li> <a href="#" onClick={() => setCurrentSection('Home')}>Home</a> </li>
                    <li> <a href="#About" onClick={() => setCurrentSection('About')}>About</a> </li>
                    <li> <a href="#Resume" onClick={() => setCurrentSection('Resume')}>Resume</a> </li>
                    <li> <a href="#Contact" onClick={() => setCurrentSection('Contact')}>Contact</a> </li>
                </ul>

                <a onClick={()=>myfinction()}><TfiMenuAlt className="menuicon"/></a>
            </nav>

            <div className="Myimag">
                <img src={Myimag} />
            </div>

            <div className="nameDiv">
                <h1 className="h1">I'm Sahil khan</h1>
                <p className="p">Front End development</p><hr />
            </div>

            <div className="iconsdiv">
            <a  href="https://www.instagram.com/sahil_khan__mr/" target="_block" ><FaInstagram  className="react-icons"  /></a>
             <a href="https://x.com/Sahilkh3629" target="_block"> <img  className="imgicons" src={twitter}/></a>
             <a  href="https://github.com/Sahil123khan" target="_block"><img  className="imgicons" src={github}/></a>
             <a  href="https://www.linkedin.com/in/sahil-khan-6b235b252/" target="_block"> <FaLinkedinIn  className="react-icons" /></a>

            </div>
        </header>
    );
};
export default Header;