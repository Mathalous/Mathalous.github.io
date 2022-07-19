import React from "react";
import {IConfig, ConfigNames} from './config-types'
const icon = process.env.PUBLIC_URL + '/me.jpg'

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
    {name:"Git",    level:4,  description:'I have used git and similar version control solutions long enough to be familiar with common use cases. I know enough to know there is much more to learn for specific situations but haven\'t had the need to master them.'},
    {name:"Docker",   level:3,  description:'I have written a few Dockerfiles and docker-compose files involving shared volumes and networks.'},
    {name:"Linux",   level:3,  description:'Linux has been a blast. I\'ve only used it for around a year, but am enjoying the simplicity using commands. While I still have much to learn, I am comfortable doing most common tasks.'},
    {name:"OOP",   level:4,  description:'Object-Oriented programming is the default. While I would argue that there are times when functional programming makes more since, wraping that in an object is often easier for other developers use.'},
    {name:"React", level:4, description:"I am comfortable using react for common use cases. Creating components, pulling dependencies into props, and UseState is second nature. I have less frequently created custom hooks, but know there is much more advanced usage."}
    

  ],
  [ConfigNames.Projects]:[
    {name:'this',             description:'This website was created with react and typescript. The responsive widgets are made using the react-grid-layouts package.'},
    {name:'Greed Quest',      description:'College project made with Game Creator game engine. Allowed ground and ship based traversal and combat with an inventory, consumables, etc.'},
    {name:'Melee Upgrade',    description:'Modification of the unity plugin "Game Creator." Allowed for equiping multiple melee weapons with independent hitboxes that activated dependent on the animation played Also added ease of use features such as a default got hit animation set and additional reaction categories.'},
    {name:'Minecraft Plugin', description:'A customizable minecraft leveling plugin that allowed server owners to define commands to execute upon player level up. Allowed for custom defined classes with different experiance gains dependent on class.'},
    {name:'Unity CBCC',       description:'A Component Based Character Controller for Unity. Built for easy extention and modification.'},
    {name:'DM Manager',       description:'A Java based GUI to allow a DM/GM organize players and npc turns.'},
    {name:'RAPT',             description:'A C# MVVM GUI used to automate & plan pan and tilt cameras tracking aircraft.'},
    {name:'Auto IVV',         description:'A job is a job is a job.'},

  ],
  [ConfigNames.Background]:[
    {name:'Education',    description:'bachelor\'s degree in computer science, with a minor in Mathematics from UAH.'},
    {name:'Work History', description:'Radiance Technologies & deciBel Research.'},
  ],
  [ConfigNames.Inspector]:{name:'none', description:'blank', display: <div/>}
}
export default Data