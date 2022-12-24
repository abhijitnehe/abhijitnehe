import "./workCardStyles.css";

import workCardData from "./workCardData"


import React from 'react'
import Work1 from "./workCard";


const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">    
        {workCardData.map((val, ind) => {
            return(
                <Work1
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            )
        })}
        </div>    
    </div>
  )
}

export default Work