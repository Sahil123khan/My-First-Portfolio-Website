import "../Css/Main.css"
import Myimagbg from "../assets/Images/MyImgBg.png"
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";


const Main = () => {
    return (
        <main id="About" className="maindiv">
            <section className="MainSectionDiv">
                <div className="ImgIconDiv">
                    <div className="imgradiusdiv">
                    <img src={Myimagbg} />

                    </div>
                    <FaAngleDoubleRight className="rightIcon" />
                </div>

                <div className="MyInfo">
                    <h2 id="about">About me</h2>
                    <div className="P-Div">
                        <p  id="P_info" > Hello I'm Sahil Khan, I'm a front-end developer.
                          I started my front-end developer journey in 2022.
                         I have done app development and web development,
                         I choosed react to fulfill my dream.
                         why reactjs because reactjs is very easy to understand.</p>
                        <div className="Downloadbtn">
                         
                       <a href="https://app.luminpdf.com/viewer/6655d2015c0f7879cf1f1466"  target="_block" >
                        <i  ><FaDownload /></i>
                        Download Resume
                       </a>


 
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
};
export default Main;