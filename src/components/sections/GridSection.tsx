import React from "react";
import { GridItem } from "../GridItem";

export function GridSection(props: {id:string, name:string, children?:JSX.Element}){
  return <GridItem id={props.id} handle={<label>{props.name}</label>}>
    {props.children}
  </GridItem>
}


export default GridSection