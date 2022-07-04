import React from "react";
import { makeTags } from "..";
import { ConfigNames, IBasicData, ILanguage } from "../../../../constants/config-types";
import { TagGroup } from "../../../tags";
import { GenericFallback } from "../GenericFallback";
import { GenericNodeProps } from "../ItemNode";
import { LanguageFallback } from "./language-fallback";

function JSXInternal (props:GenericNodeProps<ILanguage>){
  let thisWebsiteTag = makeTags(["this"], ConfigNames.Projects, props.config, props.updateInspector)
  let TSX = makeTags(["TSX"], ConfigNames.Languages, props.config, props.updateInspector)
  return <div>
    <h3 style={{textAlign:'center'}} >{props.item.name}</h3>
    <p style={{display:'inline'}}>
      At the time of making&nbsp;
    </p>
    {thisWebsiteTag}
    <p style={{display:'inline'}}> website, I have been developing React for about a year. Learning it has been an interesting process, made harder by the official tutorials using class-based components instead functional components.
    </p>
    <p>
      Coming from object-oriented languages, I struggled to transition to functional based components at first. I had a hard time separating the control of a component's state from the component itself. There is a lot to learn from the functional style. Functional code naturally breaks itself down into much smaller chunks than object-oriented. No matter how highly we regard encapsulation, the tediousness of creating a new file and thinking of a new name often causes slightly bloated classes that result in a loss of flexibility.
    </p>
    <p>
      While I still prefer object-oriented programming, I find the difference to be less than I expected. In most cases, I used functions as classes with a single path. I would likely prefer a mixed approach and will need to look into hybrid languages in the future.
    </p>
    <TagGroup>{thisWebsiteTag.concat(TSX).concat(
      makeTags(["CSS"], ConfigNames.Languages, props.config, props.updateInspector
    ))}</TagGroup>
  </div>
}

export function JSX(props: GenericNodeProps<IBasicData> | GenericNodeProps<ILanguage>){
  if(!(props.item as ILanguage).level)
    return <GenericFallback {...props} />

  if(props.item.name !== "JSX")
    return <LanguageFallback {...props as GenericNodeProps<ILanguage>}/>
  return <JSXInternal {...props as GenericNodeProps<ILanguage>}/>
}