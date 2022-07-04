import React from "react";
import { IProject } from "../../../../constants/config-types";
export function MinecraftPlugin(props:{item:IProject}){
  return <div>
    <h3 style={{textAlign:'center'}} >{props.item.name}</h3>
    <p>
      During my highschool/college years, I wrote a fair amount of code for Minecraft. One of my larger works was an RPG plugin. This plugin allowed for an admin to create custom “classes” that gained exp through ways defined in a config file. It allowed for the admin to define commands to execute when specific events, such as a level up, occurred. Weapon-dependent damage modifiers and other RPG classics were also provided.
    </p>
    <p>
      The idea was to take the various plugins available on Bukkit and combine them into a custom RPG system. My favorite thing was to put a negative modifier on bow damage for a healer class to create a skill based ranged heal.
    </p>
  </div>
}