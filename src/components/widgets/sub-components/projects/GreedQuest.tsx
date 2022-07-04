import React from "react";
import { IProject } from "../../../../constants/config-types";
import { Giphy } from "../GiphyGif";
export function GreedQuest(props:{item:IProject}){
  return <div className="fill" style={{display:'flex', flexDirection:'column'}}>
    <h3 style={{textAlign:'center'}} >{props.item.name}</h3>
    <p>
      Greed Quest was a college project using the game engine Game Creator. The game itself included several underutilized features.
      It had a mmo style inventory, hotbar, adjustable projectile lauch count, and enemy drops. I wish it wasn't so hard to find sprites,
      or that we had an artiest on the team. It would have been pretty cool to see where the gameplay could have gone.
    </p>
    <p>
      Game Creator has it's own language, GML. I remember it being similar to JS, but there was a lot more
      hassle that I would have expected. For example, scripts on different files were simply copy/pasted. This means
      no scope change and any variables already in use were modified. I ended up adding the script abbrivation to the variables
      just to keep them from conflicting. 
    </p>
    <p>
      I worked on a few other projects for this class as well, such as a star wars themed pong. It was fun messing around with the 
      styling and graphics. Obviously the losing audio clip was "Do or do not, there is no try."
    </p>
    <div>{props.item.description}</div>
    <br/>
    <div style={{flex:'1', display:"flex", flexWrap: 'wrap', gap:'5px'}}>
      <div style={{flex:1}}>
        <Giphy style={{width:'100%', height:'100%', minWidth:'150px'}} title="Greed Quest 1" src="https://giphy.com/embed/9Joyhub3okyHyUfEdX"/>
      </div>
      <div style={{flex:1}}>
        <Giphy style={{width:'100%', height:'100%', minWidth:'150px'}}  title="Greed Quest 2" src="https://giphy.com/embed/AKdOWsFRppxeGt2nLH"/>
      </div>
    </div>
  </div>
}