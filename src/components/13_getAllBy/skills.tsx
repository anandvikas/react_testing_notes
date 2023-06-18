import React from "react";
import { skillsProps } from "./skills.types";

export const Skills = (props: skillsProps) => {
  const { skills } = props;
  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </>
  );
};
