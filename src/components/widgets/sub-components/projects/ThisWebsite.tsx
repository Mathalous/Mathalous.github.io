import React from "react";
import { IProject } from "../../../../constants/config-types";
export function ThisWebsite(props:{item:IProject}){
  return <div>
    <h3 style={{textAlign:'center'}} >{props.item.name}</h3>
    <p>
      This website was created using React, Typescript, and react-grid-layout.
      All gifs are hosted using embedded Giphy.
    </p>
    <p>
      It’s intent is to showcase a few of my projects while giving me an excuse to further my frontend skills
    </p>
    <p>
      The source code is avalible on <a href="https://github.com/Mathalous/Mathalous.github.io/tree/main" >Github</a>
    </p>
  </div>
}