import React from "react";
import { IBasicData, ILanguage } from "../../../../constants/config-types";
import { GenericFallback } from "../GenericFallback";
import { GenericNodeProps } from "../ItemNode";
import { LanguageFallback } from "./language-fallback";

function CPlusPlusInternal (props: GenericNodeProps<ILanguage>){
  return <div>
    <h3 style={{textAlign:'center'}} >{props.item.name}</h3>
    <p>
      C++ was my language of choice during college and I once considered myself proficent in it but looking back I was taught
      using c++03 standards. Since then I have had few occurances where the language made since to use. 
    </p>
    <p>
      This will be remedied in the near future, as I intend to revisit the language and bring myself up to speed 
      what's considered the current best practices. My largest area of interest is finding a cleaner syntax and
      proper use of smart pointers.  
    </p>
    <p>
      Most projects I have used C++ for so far are console apps during college. The one that stands out the most in my mind is MGOL,  
      Modified Game Of Life, a 0 player game where wolves eat deer, deer eat plants, and plants respawn randomly. While plants remained
      static once spawned, wolves and deer each saught out their respective food source. Two wolves or deer near each other would spawn 
      more, but only if they were well fed. Likewise, they would despawn from starvation.
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