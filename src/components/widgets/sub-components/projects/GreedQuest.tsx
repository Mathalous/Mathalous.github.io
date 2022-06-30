import React from "react";
import { IProject } from "../../../../constants/config-types";
export function GreedQuest(props:{item:IProject}){
  return <div>
    <div>{props.item.name}</div>
    <div>{props.item.description}</div>
  </div>
}