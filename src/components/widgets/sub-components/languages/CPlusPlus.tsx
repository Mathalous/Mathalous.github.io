import React from "react";
import { IBasicData, ILanguage } from "../../../../constants/config-types";
import { GenericFallback } from "../GenericFallback";
import { GenericNodeProps } from "../ItemNode";
import { LanguageFallback } from "./language-fallback";

function CPlusPlusInternal (props: GenericNodeProps<ILanguage>){
  return <div>
    <p>
      C++ was my language of choice in college and I considered myself proficent in it at the time
      but looking back I was taught using c++03 standards. Since then I have had few occurances where the
      language made since to use. 
    </p>
    <p>
      This will be remedied in the near future, as I intend to revisit the language and bring myself up to speed 
      what's considered the current best practices. My largest area of interest are using smart pointers. 
    </p>
    <p>
      Most projects I have used C++ for so far are console apps crom college. The one that stands out the most in my mind is MGOL,  
      Modified Game Of Life, a 0 player game where wolves eat deer, deer eat plants, and plants respawn randomly.
    </p>
  </div>
}

export function CPlusPlus(props: GenericNodeProps<IBasicData> | GenericNodeProps<ILanguage>){

  if(!(props.item as ILanguage).level)
    return <GenericFallback item={props.item} updateInspector={props.updateInspector} />
  
  if(props.item.name !== "C++")
    return <LanguageFallback {...props as GenericNodeProps<ILanguage>} />
  return <CPlusPlusInternal {...props as GenericNodeProps<ILanguage>}/>
}