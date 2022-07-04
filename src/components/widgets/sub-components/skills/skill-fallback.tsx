import React from "react";
import { ILanguage } from "../../../../constants/config-types";
import { GenericFallback } from "../GenericFallback";
import { GenericNodeProps } from "../ItemNode";

export function SkillFallback (props: GenericNodeProps<ILanguage>){
    //TODO: Add details?
    return <GenericFallback {...props}/>
  }