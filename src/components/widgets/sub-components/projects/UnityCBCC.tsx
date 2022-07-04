import React from "react";
import { IProject } from "../../../../constants/config-types";
import { Giphy } from "../GiphyGif";
import { GenericNodeProps } from "../ItemNode";
export function UnityCBCC(props:GenericNodeProps<IProject>){
  return <div style={{height:'100%', display:'flex', flexDirection:'column'}}>
    <h3 style={{textAlign:'center'}} >{props.item.name}</h3>
    <p>
      After playing with the Game Creator package for unity, I realized it was lacking in several areas. I looked for other character controllers, but all of them were lacking, geared towards something specific, or half-baked. In the end, I started to make my own.
    </p>
    <p>
      Likely, this wasn’t a unique decision. Dozens of character controllers are available in the asset store. The goal for my character controller was to make it easy to change, by having as many parts be independent components as possible. This project is still very early in development, and only worked on the occasional free weekend.
    </p>
    <p>
    Unfortunately, for recording, the part I am just now focusing on is the camera aspect. I’m wanting to use Unity’s Cinemachine package, but it’s difficult to get it working on spherical planets or non-y-axis aligned down vectors.
    </p>
    <Giphy title="CBCC" src="https://giphy.com/embed/fH7CzKDhvSbRYMTyTM" />
  </div>
}