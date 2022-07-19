import React from "react";
import { NamedNodeProps } from "./ItemNode";

export function GenericFallback(props:NamedNodeProps){
  return <div >
      <h3 style={{textAlign:'center'}}>{props.item.name}</h3>
      <p>
        {props.item.description}
      </p>
  </div>
}