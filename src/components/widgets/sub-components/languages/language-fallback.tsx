import React from "react";
import { ILanguage } from "../../../../constants/config-types";
import { GenericFallback } from "../GenericFallback";
import { GenericNodeProps } from "../ItemNode";

export function LanguageFallback (props: GenericNodeProps<ILanguage>){
  //TODO: Add details?
  return <GenericFallback {...props}/>
}