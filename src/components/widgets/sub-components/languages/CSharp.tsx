import React from "react";
import { NamedView } from "..";
import { ConfigNames, getItemOrDefault, IBasicData, ILanguage } from "../../../../constants/config-types";
import { Tag, TagGroup } from "../../../tags";
import { GenericFallback } from "../GenericFallback";
import { GenericNodeProps } from "../ItemNode";
import { LanguageFallback } from "./language-fallback";

function CSharpInternal (props:GenericNodeProps<ILanguage>){
  let linkedProjectNames = ["Unity CBCC", "Melee Upgrade", "RAPT"]
  
  const projects = props.config[ConfigNames.Projects]
  let tags = linkedProjectNames.map( (namedProject) => {
    let item = getItemOrDefault(projects, namedProject)
    return <Tag data={item} key={item.name} divProps={{ onClick:(_) => props.updateInspector( {getInspectorSettings(config) {
      return {
        ...item,
        display: <NamedView configName={ConfigNames.Projects} nodeProps={{config:config, item:item, updateInspector:props.updateInspector}} />
      }
    }})}} />
  })

  return <div>
    <h3 style={{textAlign:'center'}} >{props.item.name}</h3>
    <p>
      C# is currently my favorite language, with Typescript a close second. The strong typing, in addition to ref and out parameters, make this language one of the
      easiest to express functionality. C# also handles interfaces, generics, abstract classes in an effective and concise manner.
    </p>
    <p >
      What I dislike the most about C# is that dictionaries can become difficult to use. I prefer Javascript and Python as those languages 
      make dicts near effortless to use. My favorite language for dicts is Typescript, as the typing is very expresive once the syntax is understood.
    </p>
    <p>
      Delegates are a close second in reguards to issues. Defining the signature makes using delegates a bit of a hassle. Inlining with Typescript is much more streamlined,
      even if I often go back and define them seperately. It's nice to be able to get something working before breaking up the code into reusable chunks. 
    </p>
    <p>
      I've used C# both professionally and as a hobbiest. Links to the relavent projects are below.
    </p>
    <TagGroup>
      {tags} 
    </TagGroup>
  </div>
}

export function CSharp(props:GenericNodeProps<ILanguage> | GenericNodeProps<IBasicData>){
  if(!(props.item as ILanguage).level)
    <GenericFallback {...props} />
  else if(props.item.name !== 'C#')
    return <LanguageFallback {...props as GenericNodeProps<ILanguage>}/>

  return <CSharpInternal {...props as GenericNodeProps<ILanguage>}/>
}