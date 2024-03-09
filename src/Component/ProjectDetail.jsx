import "../CSS/ProjectDetail.css";

import { useLocation, useParams } from "react-router-dom";

function ProjectDetail() {
  const { projectTitle } = useParams();
  const { state } = useLocation();
  console.log(state.projectImage);
  return (
    <div id="projectDetail">
      <div
        id="projectDetail-image"
        style={{
          backgroundImage: `url(${state.projectImage})`,
        }}
      ></div>
      <div id="projectDetail-contents">
        <h2 id="projectDetail-contents-title">{projectTitle}</h2>
        <div id="periodTech">
          <p>Period : {state.period}</p>
          <p>Tech : {state.skill}</p>
        </div>
        <h3 style={{ marginBottom: "20px", fontWeight: "600" }}>Contents</h3>
        {state.content.map((elem) => {
          return (
            <p>
              <span style={{ color: "green", fontWeight: "900" }}>
                {" "}
                ✔ &nbsp;&nbsp;
              </span>
              {elem}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectDetail;
