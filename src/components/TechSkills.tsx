import { memo, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type TechSkillsProps = {
  skills: Readonly<Record<string, string>>;
  wrapperStyles: CSSProperties;
  skillsStyles: CSSProperties;
  listWrapperStyles: CSSProperties;
  listStyles: CSSProperties;
  children: ReactNode;
};

function TechSkills({
  skills,
  wrapperStyles,
  skillsStyles,
  listWrapperStyles,
  listStyles,
  children,
}: TechSkillsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const techSkillsList = Object.entries(skills).map(([key, skill]) => (
    <li key={key} style={listStyles}>
      <strong>{key}: </strong> {skill}
    </li>
  ));

  return (
    <div style={wrapperStyles}>
      <button
        style={skillsStyles}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {children}
      </button>
      <div style={{ ...listWrapperStyles, maxHeight: isOpen ? "500px" : "0" }}>
        <ul style={{ textAlign: "left" }}>{techSkillsList}</ul>
      </div>
    </div>
  );
}

export default memo(TechSkills);
