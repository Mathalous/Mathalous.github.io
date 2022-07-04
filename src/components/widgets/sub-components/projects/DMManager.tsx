import React from "react";
import { IProject } from "../../../../constants/config-types";
import { Giphy } from "../GiphyGif";
import { GenericNodeProps } from "../ItemNode";
export function DMManager(props:GenericNodeProps<IProject>){
  return <div style={{height:'100%', display:'flex', flexDirection:'column'}}>
    <div>
      <h3 style={{textAlign:'center'}} >{props.item.name}</h3>
      <p>
        Dungeon Master Manager (DMM) was a project I created right after college. It was suppose to handle all of the pen and paper aspects
        for the DM with high configurability. Stats, status effects, and status behaviors were all configurable. Additional JavaScript scripts
        could be created for more complex interaction.
      </p>
      <p>
        The idea was to save prefabs for each player or monster type. You could then throw any of them in the game board. Based on the 
        character's stats, turn order would automatically be generated and placed in left-right and top-down order. It would even keep
        track of the time. Of course everything needed to be manually adjustable as well, for DM overrides.
      </p>
      <p>
        While the idea was good on paper, it had too few UX niceties. Mostly it was too difficult to find which player you were looking for.
        Color coding would have helped, as well as icons instead of the massive grid of text. 
      </p>
    </div>
    <Giphy title={props.item.name} src="https://giphy.com/embed/8hacvb0WcgZoxK6lWd" />
  </div>
}
