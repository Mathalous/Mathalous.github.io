import React from "react";
import { IBasicData, ILanguage } from "../../../../constants/config-types";

export function View<T extends IBasicData>(props:{item:T}){
  return <div>
    <div>{props.item.name}</div>
    <div>{props.item.description}</div>
  </div>
}

export function LanguageFallback  (props:ILanguage){
  return <div>
    <div>{props.name}, level: {props.level}</div>
    <div>{props.description}</div>
  </div>
}