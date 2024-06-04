import "../Css/Resume.css"

const Resume = () => {
  return (
    <div id="Resume" className="ResumeMain">
      <div className="ResumeDataDiv">

        <div className="HeadingDiv-Main">
          <div className="HeadindDiv-1">
            <h3>Education</h3>
          </div>

          <div className="HeadindDiv-2">
            <h4>Graduation in B.com(Bachelor of commerce)</h4>
            <span>Start(2022) <span>End(2024)</span> </span>
            <p>Received Bachelor of Commerce degree from Maharshi Dayanand Saraswati University,Ajmer.</p><hr />
          </div>
        </div>

        <div className="HeadingDiv-Main">
          <div className="HeadindDiv-1">
            <h3 className="certi-h3">certification</h3>
          </div>

          <div className="HeadindDiv-2">
            <h4 >CSS Certification Test - Youtube Course</h4>
            <p className="html-p">HTML Certification Test - Youtube Course</p><hr />
          </div>
        </div>

        <div className="Skill-Div">
          <div className="HeadindDiv-1">
            <h3 id="Skills">Skills</h3>
          </div>

          <div className="Exprience">
            <div className="H5-Div">
              <h5>React.js</h5>
              <h5>JavaScript</h5>
              <h5>HTML</h5>
              <h5>Css</h5>
              <h5>Vite</h5>
              <h5>Git</h5>
            </div>
          </div>
        </div>




      </div>
    </div>
  )
}
export default Resume