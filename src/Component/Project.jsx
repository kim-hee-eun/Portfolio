import "../CSS/Project.css";

import ProjectBox from "./ProjectBox";
import projectContents from "../Data/projectContents";

function Project() {
  return (
    <div id="project">
      <p id="click-message">Click to see more details!</p>
      <div id="project-boxes">
        {projectContents.map((item, index) => {
          return (
            <ProjectBox
              projectImage={item.projectImg}
              projectTitle={item.title}
              period={item.period}
              skill={item.skill}
              content={item.content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Project;
