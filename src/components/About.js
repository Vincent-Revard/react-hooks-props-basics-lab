import React from "react";
import Links from "./Links";

const About = (props) => {
  const {bio, links} = props

    return (
      <div id="about">
        <h2>About Me</h2>
        {props.bio ? <p>{bio}</p> : null}
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links 
          github = {links.github}
          linkedin = {links.linkedin}
        />
      </div>
    )
}

export default About;
