import React from "react";
import {IConfig, ConfigNames} from './config-types'
const icon = process.env.PUBLIC_URL + '/logo192.png'

export const Data : IConfig = {
  [ConfigNames.Overview]:{
    name:"Matthew",
    description:"Generalist developer that enjoys learning new platforms and writing pretty code.",
    image: icon,
  },
  [ConfigNames.Languages]:[
    {name:"C#",     level:5,  description:'CSharp using MVVM or Unity game engine'},
    {name:"C++",    level:3,  description:'if((C++)=>desc == null) return null;'},
    {name:"Python", level:4,  description:'from __future__ import description'},
    {name:"Java",   level:4,  description:'this.GetDescription().format(this.formatter.description)'},
    {name:"JSX",    level:4,  description:'Javascript + React'},
    {name:"TSX",    level:4,  description:'Javascript + React + Typescript'},
    {name:"CSS",    level:4,  description:'Web styling using .css files'},
  ],
  [ConfigNames.Skills]:[
    {name:"CSS",    level:1,  description:'Web styling using .css files'},
    {name:"JSX",    level:4,  description:'Javascript + React'},
  ],
  [ConfigNames.Projects]:[
    {name:'this', description:'This website was created with react and typescript. The responsive widgets are made using the react-grid-layouts package.'},
    {name:'Greed Quest', description:'College project made with Game Creator game engine. Allowed ground and ship based traversal and combat with an inventory, consumables, etc.'},
    {name:'Melee Upgrade', description:'Modification of the unity plugin "Game Creator" (no relation to the game engine.) Allowed for equiping multiple melee weapons with independent hitboxes that activated dependent on the animation played Also added ease of use features such as a default got hit animation set and additional reaction categories.'},
    {name:'Minecraft Plugin', description:'A customizable minecraft leveling plugin that allowed server owners to define commands to execute upon player level up. Allowed for custom defined classes with different experiance gains dependent on class.'},
    {name:'Unity CBCC', description:'A Component Based Character Controller for Unity. Built for easy extention and modification.'},
    {name:'DM Manager', description:'A Java based GUI to allow a DM/GM organize players and npc turns'},
    {name:'RAPT', description:'A C# MVVM GUI used to automate & plan pan and tilt cameras tracking aircraft'},
    {name:'Auto IVV', description:'A job is a job'}

  ],
  [ConfigNames.Background]:[
    {name:'Education', description:'bachelor\'s degree in computer science, with a minor in Mathematics from UAH.'},
    {name:'Work History', description:'Radiance Technologies & deciBel Research.'},
  ],
  [ConfigNames.Inspector]:{name:'none', description:'blank', display: <div/>}
}
export default Data