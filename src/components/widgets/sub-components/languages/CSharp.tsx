import React from "react";
import { ConfigNames, IBasicData, ILanguage } from "../../../../constants/config-types";
import { Tag } from "../../../tags";
import { GenericFallback } from "../GenericFallback";
import { GenericNodeProps } from "../ItemNode";
import { LanguageFallback } from "./language-fallback";
import { Python } from "./Python";

function CSharpInternal (props:GenericNodeProps<ILanguage>){
  return <div>
    <p>
      C# is my favorite language. The strong typing in addition to ref and out parameters make this language one of the
      easiest to express functionality. C# also handles interfaces, generics, abstract classes in an effective and concise manner.
    </p>
    <p>
      My largest issue with C# is that dictionaries can become difficult to use. I believe Javascript and Python are on the right track in 
      making them near effortless to use. My favorite language for dicts is Typescript, as the typing is very expresive once the syntax is understood.
    </p>
    <p>
      I have used this language both professionally and as a hobbiest.
    </p>
    <Tag 
        data={props.item} 
        divProps={{ onClick:(_) => props.updateInspector( {getInspectorSettings(config) {
          //TODO: Put project/skill/etc names into config
          let item = config[ConfigNames.Projects].find( (arg) => {return arg.name === "Greed Quest"} )
          if(!item)
            //TODO: make generic null item display
            return {name:'none', description:'blank', display: <div>
              These are not the droids you're looking for
              more testing required...
            </div> }
          console.log(item)
          return {
            ...item,
            //TODO: Update when <GreedQuest/> is updated.
            display: <Python item={item} updateInspector={props.updateInspector} />
          }
        },} )}}
      />
    <Tag 
        data={props.item}
        divProps={{ onClick:(args) => props.updateInspector({
          configName:ConfigNames.Projects, 
          clickArgs:{event:args, item:props.item}}
        )}}
      />
  </div>
}

export function CSharp(props:GenericNodeProps<ILanguage> | GenericNodeProps<IBasicData>){
  if(!(props.item as ILanguage).level)
    <GenericFallback {...props} />
  else if(props.item.name !== 'C#')
    return <LanguageFallback {...props as GenericNodeProps<ILanguage>}/>

  return <CSharpInternal {...props as GenericNodeProps<ILanguage>}/>
}