import React from "react";
import { IProject } from "../../../../constants/config-types";
import { GenericNodeProps } from "../ItemNode";
export function MeleeUpgrade(props:GenericNodeProps<IProject>){
  return <div style={{height:'100%', display:'flex', flexDirection:'column'}}>
    <h3 style={{textAlign:'center'}} >{props.item.name}</h3>
    <div>
      <p>
        Melee Upgrade is a modification of the plugin “Game Creator: Melee” for the Unity game engine. The plugin itself provided most of the framework, but lacked the ability for multiple hit boxes per fighting style. My modification allowed for the toggling of various hit boxes depending on the animation clip. This allowed for more complex animations to be more accurately be reflected in combat.
      </p>
      <p>
        Unfortunately, the more I used Game Creator, the more limitations I encountered. I ended up deciding to write my own character controller once I realized non-humanoids were not supported, nor was arbitrary Y axis support. (no rotating character’s up axis)
      </p>
      <p>
        Despite being a relatively simple refactor of another project, many people still use my modifications and have included it into their own projects. 
      </p>
      <a href="https://hub.gamecreator.one/content/item/qyWPm6ZJhpT2QBPnbr6b">Melee Upgrade Mod</a><br/>
      <a href="https://www.youtube.com/watch?v=eG6RsXwMt0Q&ab_channel=RVR">Credited in description</a>
      <br/>
    </div>
    <div style={{flex:'5 0', flexDirection:'column'}}>
      <iframe title="Melee Upgrade" style={{display:'block', margin:'auto', height:'100%', width:'100%'}} src="https://giphy.com/embed/SWXMKsDomBTtEsEL2q" 
      frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
    </div>
  </div>
}