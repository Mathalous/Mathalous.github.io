import React from "react";
import { IBasicData, ILanguage } from "../../../../constants/config-types";
import { GenericFallback } from "../GenericFallback";
import { GenericNodeProps } from "../ItemNode";
import { LanguageFallback } from "./language-fallback";

function PythonInternal (props: GenericNodeProps<ILanguage>){
  return <div>
    <h3 style={{textAlign:'center'}} >{props.item.name}</h3>
    <p>
      Python is a language I want to like, but I'm not really a fan. I find its import system tedious compared to JavaScript. Likewise, JavaScript's package.json file handles dependencies much easier than python, especially when trying to containerize multiple separate projects. In fact, I prefer npm over pip as I often install a python package only to realize I need to import from pkg3 instead of pkg.
    </p>
    <p>
      Then there are my issues with python's syntax. Colons instead of brackets, capital True and False, try/except 
      instead of try catch, inability to have numerical dictionaries, etc. Lack of proper public/protected/private modifiers
      and ugly naming preferences. __main__ and _private_one is as annoying to read as it is to type.
    </p>
    <p>
      Displeasures aside, it excels at single file scripts. If all you need is a barebones server or database, python is the language of choice. There are also a few syntactical niceties with added keywords such as and, or, and in.
    </p>
    <p>
      I have used this in several minor projects to create relay servers, databases, Kafka pub/sub’s, and Avro formatters.
    </p>
  </div>
}

export function Python(props: GenericNodeProps<IBasicData> | GenericNodeProps<ILanguage>){
  if(!(props.item as ILanguage).level)
    return <GenericFallback  {...props} />
  
  if(props.item.name !== "Python")
    return <LanguageFallback  {...props as GenericNodeProps<ILanguage>}/>
  return <PythonInternal  {...props as GenericNodeProps<ILanguage>}/>
}