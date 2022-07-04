import React from "react";
import { NamedNodeProps } from "./ItemNode";

export function GenericFallback(props:NamedNodeProps){
  return <div style={{textAlign:'center'}}>
      <h3>{props.item.name}</h3>
      <p>
        {props.item.description}
      </p>
  </div>
}