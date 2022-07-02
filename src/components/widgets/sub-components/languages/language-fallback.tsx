import React from "react";
import { ILanguage } from "../../../../constants/config-types";
import { GenericNodeProps } from "../ItemNode";

export function LanguageFallback (props: GenericNodeProps<ILanguage>){
  return <div>
    <div>{props.item.name}, level: {props.item.level}</div>
    <div>{props.item.description}</div>
  </div>
}