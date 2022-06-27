import React from "react";
import { GridItem } from "../GridItem";

export function Section(props: {id:string, name:string, children?:JSX.Element}){
  return <GridItem id={props.id} handle={<label>{props.name}</label>}>
    {props.children}
  </GridItem>
}


export default Section