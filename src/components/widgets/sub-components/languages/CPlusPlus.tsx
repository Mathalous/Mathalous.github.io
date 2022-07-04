import React from "react";
import { IBasicData, ILanguage } from "../../../../constants/config-types";
import { GenericFallback } from "../GenericFallback";
import { GenericNodeProps } from "../ItemNode";
import { LanguageFallback } from "./language-fallback";

function CPlusPlusInternal (props: GenericNodeProps<ILanguage>){
  return <div>
    <h3 style={{textAlign:'center'}} >{props.item.name}</h3>
    <p>
      C++ was my language of choice during college and I once considered myself proficient in it, but looking back, my professors taught me using c++03 standards. Since then, I have had few occurrences of using the language.
    </p>
    <p>
      I will remedy this soon, as I intend to revisit C++ and bring myself up to speed with what's considered its current best practices. My largest area of interest is finding a cleaner syntax and proper use of smart pointers. 
    </p>
    <p>
      Most projects I have used C++ for so far are console apps during college. The one that stands out the most in my mind is MGOL, Modified Game Of Life, a 0 player game where wolves eat deer, deer eat plants, and plants respawn randomly. While plants remained static once spawned, wolves and deer each sought their respective food sources. Two wolves or deer near each other would spawn more, but only if they fed well enough. Likewise, they would despawn from starvation.
    </p>
  </div>
}

export function CPlusPlus(props: GenericNodeProps<IBasicData> | GenericNodeProps<ILanguage>){

  if(!(props.item as ILanguage).level)
    return <GenericFallback {...props} />
  
  if(props.item.name !== "C++")
    return <LanguageFallback {...props as GenericNodeProps<ILanguage>} />
  return <CPlusPlusInternal {...props as GenericNodeProps<ILanguage>}/>
}