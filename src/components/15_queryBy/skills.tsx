import { useState } from "react";
import { skillsProps } from "./skills.types";

export const Skills = (props: skillsProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {skills.length > 0 && (
        <ul>
          {skills.map((skill) => {
            return <li key={skill}>{skill}</li>;
          })}
        </ul>
      )}
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};
