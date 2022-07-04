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
      C# is my favorite language at present, with Typescript a close second. Its strong typing, along with ref and out parameters, makes the language one of the easiest to express functionality. C# also handles interfaces, generics, and abstract classes in an effective and concise manner.
    </p>
    <p >
      What I dislike the most about C# is the encumbrance of dictionaries. The issue becomes obvious when using inner types that are also generic, as the length of the declaration becomes long and error prone because of missing angle brackets. Initializing with new() helps sometimes, but I often need to specify a more concrete implementation. I prefer JavaScript and Python. Both languages make dictionaries as accessible as arrays. Better yet is Typescript. Its typing is very expressive after the syntax learning curve.
    </p>
    <p>
      Delegates in C# are a close second regarding syntactical grievances. Signature definitions make using delegates a hassle. Inlining with Typescript is much more streamlined, despite preferring to define them later. It's convenient for prototyping before refactoring the code into reusable chunks.
    </p>
    <p>
      I've used C# both professionally and as a hobbyist. Links to the relevant projects are below.
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