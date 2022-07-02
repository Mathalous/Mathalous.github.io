import React from "react";
import { IBasicData, ILanguage } from "../../../../constants/config-types";
import { GenericFallback } from "../GenericFallback";
import { GenericNodeProps } from "../ItemNode";
import { LanguageFallback } from "./language-fallback";

function JavaInternal (props:GenericNodeProps<ILanguage>){
  return <div>
    Amazing custom view
    <GenericFallback {...props} />
  </div>
}

export function Java(props: GenericNodeProps<IBasicData> | GenericNodeProps<ILanguage>){
  if(!(props.item as ILanguage).level)
    return <GenericFallback {...props} />

  if(props.item.name !== "Java")
    return <LanguageFallback {...props as GenericNodeProps<ILanguage>}/>
  return <JavaInternal {...props as GenericNodeProps<ILanguage>}/>
}