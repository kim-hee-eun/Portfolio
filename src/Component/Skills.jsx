import "../CSS/Skills.css";

import backend from "../image/backend.PNG";
import certificate from "../image/certificate.PNG";
import etc from "../image/etc.PNG";
import frontend from "../image/frontend.PNG";

function Skills() {
  return (
    <div id="skills">
      <div id="frontback-box">
        <div id="frontend-skills">
          <div className="skill-title">Front-end</div>
          <img
            src={frontend}
            style={{ borderRadius: "30px", width: "700px", height: "300px" }}
            alt="frontend"
            className="skill-image"
          />
        </div>
        <div id="backend-skills">
          <div className="skill-title">Back-end</div>
          <img
            src={backend}
            style={{ borderRadius: "30px", width: "300px", height: "200px" }}
            alt="backend"
            className="skill-image"
          />
        </div>
      </div>
      <div id="etcCertificate-box">
        <div id="etc">
          <div className="skill-title">etc</div>
          <img
            src={etc}
            style={{ borderRadius: "30px", width: "550px", height: "120px" }}
            alt="etc"
            className="skill-image"
          />
        </div>
        <div id="certificate">
          <div className="skill-title">Certificate (정보처리기사)</div>
          <img
            src={certificate}
            style={{ borderRadius: "30px", width: "280px", height: "192px" }}
            alt="certificate"
            className="skill-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
