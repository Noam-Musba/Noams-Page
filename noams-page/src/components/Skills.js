import React, { useContext, useState } from "react";
import TechSkills from "./TechSkills";
import { pageNameContext } from "../App";

const wrapperStyles = {
  
  paddingTop: "10px",
  paddingBottom: "20px",
};

const skillsStyles = {
  maxWidth: "1000px",
  display: "flex",
  fontSize: "40px",
  paddingLeft: "10px",
  backgroundColor: "lightgrey",
  cursor: "pointer",
  objectFit: "contain",
};

const listWrapperStyles = {
  maxWidth: "997px",
  maxHeight: "0",
  transition: "max-height 1s",
  overflow: "hidden",
};

const listStyles = {
  borderBottom: "1px solid grey",
  padding: "5px",
  transition: "1s",
};

function Skills() {
  const techSkills = {
    "C++": "mainly from my degree",
    Python: "combination of self-studying and from my degree",
    HTML: "self-studying",
    CSS: "self-studying",
    JS: "self-studying",
    React: "self-studying",
    "Cyber Security": "from my degree and my final project",
    Wireshark: "from my final project",
  };

  const education = {
    "Computer Science":
      "BSC. in Computer Science from the Technion institution",
    "Data Structures": "like AVL trees, stacks, Queues, and more, in C++",
    "Network and Computer Security": "mainly in Python",
    "Introduction to Algorithms": "like BFS, DFS and more",
  };

  const projects = {
    1: " ",
    2: " ",
    3: " "
  }

  const firstName = useContext(pageNameContext);

  return (
    <div>
      <TechSkills
        id="technicalSkills"
        skills={techSkills}
        wrapperStyles={wrapperStyles}
        skillsStyles={skillsStyles}
        listWrapperStyles={listWrapperStyles}
        listStyles={listStyles}
      >
        What are {firstName}'s technical skills?
      </TechSkills>
      <TechSkills
        id="education"
        skills={education}
        wrapperStyles={wrapperStyles}
        skillsStyles={skillsStyles}
        listWrapperStyles={listWrapperStyles}
        listStyles={listStyles}
      >
        what is {firstName}'s education?
      </TechSkills>
      <TechSkills
        id="projects"
        skills={projects}
        wrapperStyles={wrapperStyles}
        skillsStyles={skillsStyles}
        listWrapperStyles={listWrapperStyles}
        listStyles={listStyles}
      >
        what are {firstName}'s projects?
      </TechSkills>
    </div>
  );
}

export default Skills;

/*
<div style={wrapperStyles}>
      <button style={skillsStyles} onClick={() => setIsOpen(!isOpen)}>
        What are Noam's technical skills?
      </button>
      <div style={{...listWrapperStyles, opacity: isOpen ? '1' : '0'}}>
        <ul style={{textAlign: 'left'}}>
          {Object.entries(skills).map(([key, skill]) => (
            <li key={key} style={listStyles}><strong>{key}: </strong> {skill}</li>
          ))}
        </ul>
      </div>
      
    </div>

*/
