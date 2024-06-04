import "../Css/Footer.css"
import { TfiEmail } from "react-icons/tfi";
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import twitter from "../assets/Images/twitter.png"
import github from "../assets/Images/github.png"


const Footer = () => {

   
    
    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        });
    }

 

    return (
        <footer  id="Contact" className="footer-Div">
            <div className="Address-Email-Div">

                <div className="Address-Email-2">

                    <div>
                        <TfiEmail id="Email-icon" />
                        <h4>Address and Email</h4>
                        <ul>
                            <li>Sahil Khan</li>
                            <li>Jaipur,India</li>
                            <li>Email:<a href="" id="email" >mrffking04@gmail.com</a></li>
                        </ul>
                    </div>

                </div>

            </div>

            <div className="Icons-Main-Div">
                <div className="up-Icon-div">
                    <a  onClick={scrolltoTop}> <FaCircleArrowUp id="up-Icon" /></a>

                </div>


                <div className="footer-icon">
                    <a href="https://www.instagram.com/sahil_khan__mr/" target="_block" ><FaInstagram className="react-icons" /></a>
                    <a href="https://x.com/Sahilkh3629" target="_block"> <img className="imgicons" src={twitter} /></a>
                    <a href="https://github.com/Sahil123khan" target="_block"><img className="imgicons" src={github} /></a>
                    <a href="https://www.linkedin.com/in/sahil-khan-6b235b252/" target="_block"> <FaLinkedinIn className="react-icons" /></a>
                </div>

                <p>@ Sahil khan</p>
            </div>
        </footer>
    );
};
export default Footer;