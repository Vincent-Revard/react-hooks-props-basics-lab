import React from "react";

const Links = (props) => {
  const {github, linkedin} = props

  return (
    <h3>Links
      {<a href={github}>{github}</a>}
      {<a href={linkedin}>{linkedin}</a>}
    </h3>
    )
}

export default Links