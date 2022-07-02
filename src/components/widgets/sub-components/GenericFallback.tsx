import React from "react";
import { NamedNodeProps } from "./ItemNode";

export function GenericFallback(props:NamedNodeProps){
  return <div>{`Generic Fallback-${props.item.name}: ${props.item.description}`}</div>
}