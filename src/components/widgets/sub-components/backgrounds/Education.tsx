import React from "react";
import { IBackground } from "../../../../constants/config-types";
import { GenericNodeProps } from "../ItemNode";

export function Education (props: GenericNodeProps<IBackground>){
  return <div>
    <h3 style={{textAlign:'center'}}>{props.item.name}</h3>
    <p>
      I graduated from UAH after the spring of 2017 with a Bachelor’s degree in computer science and a minor in mathematics. Currently, I have no plans to further my education academically, as I find I learn much more through practical experience.
    </p>
    <p>
      I found college was only great for exposing you to topics of interest. To really understand the logic, hands on experience is necessary. Design patterns are a great example. It’s not until you need one that you really understand why you need it.
    </p>
    <p>
      Unfortunately, there’s only so much time in the day. Furthering my degree would mean less time for my own projects and at present I consider them more helpful to my development. That said, if I were to go back I would focus on software architecture. I enjoy writing code as cleanly as possible, and would love the chance to design API level code.
    </p>
  </div>
}
    
