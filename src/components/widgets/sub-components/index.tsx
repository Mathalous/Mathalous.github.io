import React from "react";
import { IBasicData } from "../../../constants/config-types";


const DefaultView = (props:{item:IBasicData}) => <div>{`${props.item.name}: ${props.item.description}`}</div>

export function NamedView(props:{item:IBasicData}){


  switch (props.item.name){

    default:
      return <DefaultView item={props.item} />
  }
}