import React from "react";
import { makeTags } from "..";
import { ConfigNames, IBasicData, ILanguage } from "../../../../constants/config-types";
import { TagGroup } from "../../../tags";
import { GenericFallback } from "../GenericFallback";
import { GenericNodeProps } from "../ItemNode";
import { LanguageFallback } from "./language-fallback";

function CSSInternal (props:GenericNodeProps<ILanguage>){
  let tags = makeTags(['this'], ConfigNames.Projects, props.config,props.updateInspector).concat(
    makeTags(['JSX','TSX'], ConfigNames.Languages, props.config, props.updateInspector))

  return <div>
    <h3 style={{textAlign:'center'}} >{props.item.name}</h3>
    <p>
      I consider my CSS skills passable for my current needs. I have only dug into frontend development for a year and the CSS was actually the most troublesome part. Developers have a habit of dismissing CSS. It’s ‘just’ styling after all. Until they incorrectly implemented the styling, and a plethora of untraceable bugs crop up. Worse is when it’s mistaken for JavaScript errors.
    </p>
    <p>
      This is usually the result of default settings within commonly used tags. The most annoying of which is box-sizing, especially when using percentage based units. Adding to the confusion are the unexpected but useful tidbits, such as using margin:auto to center elements. I took longer than I should have, trying to use the align and adjust properties before realizing they only worked with flex displays.
    </p>
    <p>
      In the future, I want to look into CSS animations more with a focus on how they can be implemented together with React. I plan to update this project later using react-transition-groups.
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