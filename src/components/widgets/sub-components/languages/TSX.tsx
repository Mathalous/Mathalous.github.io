import React from "react";
import { makeTags } from "..";
import { ConfigNames, IBasicData, ILanguage } from "../../../../constants/config-types";
import { TagGroup } from "../../../tags";
import { GenericFallback } from "../GenericFallback";
import { GenericNodeProps } from "../ItemNode";
import { LanguageFallback } from "./language-fallback";

function TSXInternal (props:GenericNodeProps<ILanguage>){
  let jsxTag = makeTags(["JSX"], ConfigNames.Languages, props.config, props.updateInspector)
  let otherTags = makeTags(["this"], ConfigNames.Projects, props.config, props.updateInspector).concat(
    makeTags(["CSS"], ConfigNames.Languages, props.config, props.updateInspector)
  )

  return <div>
    <h3 style={{textAlign:'center'}} >{props.item.name}</h3>
    <p style={{display:'inline'}}>
      Much like&nbsp;
    </p>
    {jsxTag}
    <p style={{display:'inline'}}>, I have only recently started using JS/React. Using them, I quickly got annoyed
      with manually looking back and forth between files to find the property names necessary for filling out function's parameters.
      TS was <strong>the</strong> answer I was hoping it would be. Sure, the syntax is a little annoying at first,
      but that's more of an issue with JavaScript (contextually using : or = for assignment).
    </p>
    <p>
     I prefer TS typing more than the typing of other languages. I mostly like that I can inline type information and use logical operations to further define, filter, or refine types relative to other types. While I often have to go back and clean up my code once I get it working properly, writing the code with inlined types allows me to remember what is required before abstracting to another file.
    </p>
    <TagGroup>
      {otherTags}
    </TagGroup>
  </div>
}

export function TSX(props: GenericNodeProps<IBasicData> | GenericNodeProps<ILanguage>){
  if(!(props.item as ILanguage).level)
    return <GenericFallback {...props} />

  if(props.item.name !== "TSX")
    return <LanguageFallback {...props as GenericNodeProps<ILanguage>}/>
  return <TSXInternal {...props as GenericNodeProps<ILanguage>}/>
}