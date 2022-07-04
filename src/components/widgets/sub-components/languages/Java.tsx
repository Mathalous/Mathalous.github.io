import React from "react";
import { makeTags } from "..";
import { ConfigNames, IBasicData, ILanguage } from "../../../../constants/config-types";
import { TagGroup } from "../../../tags";
import { GenericFallback } from "../GenericFallback";
import { GenericNodeProps } from "../ItemNode";
import { LanguageFallback } from "./language-fallback";



function JavaInternal (props:GenericNodeProps<ILanguage>){
  let linkedProjectNames = ["Minecraft Plugin", "DM Manager", "Auto IVV"]
  let tags = makeTags(linkedProjectNames, ConfigNames.Projects, props.config, props.updateInspector)

  return <div>
    <h3 style={{textAlign:'center'}} >{props.item.name}</h3>
    <p>
      I have a love-hate relationship with Java. I learned this language after C++ and found the naming conventions more to my liking. It was years after using C++ that I learned what cout and cin stood for. It's obvious now, but hindsight and all. Unfortunately C++ and python are infested with functions and classes that are only recognizable after using them enough to memorize them or looking them up every time.
    </p>
    <p>
      While I prefer the longer naming style of Java, it went too far. Small-scale projects require half a dozen sub folders that I will never use. Sure, it makes things scalable, but it also makes using any hierarchy view a pain. I haven't used Java in a few years though, hopefully it’s improved.
    </p>
    <TagGroup>
      {tags}
    </TagGroup>
  </div>
}

export function Java(props: GenericNodeProps<IBasicData> | GenericNodeProps<ILanguage>){
  if(!(props.item as ILanguage).level)
    return <GenericFallback {...props} />

  if(props.item.name !== "Java")
    return <LanguageFallback {...props as GenericNodeProps<ILanguage>}/>
  return <JavaInternal {...props as GenericNodeProps<ILanguage>}/>
}