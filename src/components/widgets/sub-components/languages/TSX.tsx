import React from "react";
import { IBasicData, ILanguage } from "../../../../constants/config-types";
import { GenericFallback } from "../GenericFallback";
import { GenericNodeProps } from "../ItemNode";
import { LanguageFallback } from "./language-fallback";

function TSXInternal (props:GenericNodeProps<ILanguage>){
  return <div>
    Amazing custom view
    <GenericFallback {...props} />
  </div>
}

export function TSX(props: GenericNodeProps<IBasicData> | GenericNodeProps<ILanguage>){
  if(!(props.item as ILanguage).level)
    return <GenericFallback {...props} />

  if(props.item.name !== "TSX")
    return <LanguageFallback {...props as GenericNodeProps<ILanguage>}/>
  return <TSXInternal {...props as GenericNodeProps<ILanguage>}/>
}