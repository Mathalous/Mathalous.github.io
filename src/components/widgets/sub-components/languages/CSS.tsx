import React from "react";
import { makeTags } from "..";
import { ConfigNames, IBasicData, ILanguage } from "../../../../constants/config-types";
import { TagGroup } from "../../../tags";
import { GenericFallback } from "../GenericFallback";
import { GenericNodeProps } from "../ItemNode";
import { LanguageFallback } from "./language-fallback";

function CSSInternal (props:GenericNodeProps<ILanguage>){
  let tags = makeTags(['CSS'], ConfigNames.Languages, props.config, props.updateInspector)
  return <div>
    <h3 style={{textAlign:'center'}} >{props.item.name}</h3>
    <p>
      I consider my CSS skills passable for my current needs. I have only dug into frontend development for a year or so
      and the CSS was actually the most difficult part. Developers tend to dismiss the difficulty in correctly styling
      elements, until they run into a number of bugs that can't be traced.
    </p>
    <p>
      I find this is usually the result of default settings within the commonly used tags. The most annoying of which
      for is box-sizing, especially when using percentage based units. Then there's the unexpected but useful tidbits 
      such as margin:auto to center elements. I longer than I should have trying to use align and adjust properties
      before realizing they only worked with flex displays.
    </p>
    <p>
      Going forward, I want to look into CSS animations more, and how they can be used together with react.
      I plan to update this project again using react-transition-groups. 
    </p>
    <TagGroup>
      {tags}
    </TagGroup>
  </div>
}

export function CSS(props: GenericNodeProps<IBasicData> | GenericNodeProps<ILanguage>){
  if(!(props.item as ILanguage).level){
    console.log('not language')
    return <GenericFallback {...props} />
  }

  if(props.item.name !== "CSS"){
    console.log('not CSS')
    return <LanguageFallback {...props as GenericNodeProps<ILanguage>}/>
  }
  return <CSSInternal {...props as GenericNodeProps<ILanguage>}/>
}