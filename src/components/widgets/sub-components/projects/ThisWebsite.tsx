import React from "react";
import { IProject } from "../../../../constants/config-types";
export function ThisWebsite(props:{item:IProject}){
  return <div>
    <h3 style={{textAlign:'center'}} >{props.item.name}</h3>
    <p>
      This website was created using React, Typescript, and react-grid-layout.
      All gifs are hosted using embedded Giphy. It’s intent is to showcase a few of my projects while giving me an excuse to further my frontend skills
      To achieve this goal, I put a few artificial challenges in place. The grid itself can be adjusted and a new layout generated from the placement. 
      Furthermore, adding a new item to the config will add the button to the relevent section, though a customized view can be added later to refine the view. 
    </p>
    <p>
      Source code is avalible on <a href="https://github.com/Mathalous/Mathalous.github.io/tree/main" >Github</a>
    </p>
  </div>
}