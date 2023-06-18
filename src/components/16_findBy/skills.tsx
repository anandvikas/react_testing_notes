import { useEffect, useState } from "react";
import { skillsProps } from "./skills.types";

export const Skills = (props: skillsProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 500);

    setTimeout(() => {
      setShowLogout(true);
    }, 2000);
  }, []);

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
      {showLogout && <button>Logout</button>}
    </>
  );
};
