import { IBasicData, ISkill } from "../../constants/ConfigTypes";
import { HTMLProps } from "react";
import React from "react";

export interface TagProps {
  data:IBasicData | ISkill, divProps?:HTMLProps<HTMLDivElement>, max?:number,
}
export const Tag = (props:TagProps) => {
  const defaultMax = 5;
  const max = props.max ? props.max : defaultMax
  let skill = props.data as ISkill
  return <div className="tag" {...props.divProps}>
    <div>
      {props.data.name}
    </div>
    {
      skill.level ? 
        <div className="levelbar-outter" style={{height:'.5em', backgroundColor:'#333'}}>
          <div className="levelbar-inner" style={{height:'.5em', width:`${(100.0 * skill.level / max)}%`}}/>
        </div>
      : <div/>
    }
  </div>
}
export default Tag