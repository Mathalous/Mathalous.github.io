import React from "react";
import { ILanguage } from "../../../../constants/config-types";
import { LanguageFallback } from "./language-fallback";
export function CSS(props:{item:ILanguage}){
  return <LanguageFallback {...props.item}/>
}