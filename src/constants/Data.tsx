import React from "react";
import {IConfig, ConfigNames} from './ConfigTypes'


export const Data : IConfig = {
  [ConfigNames.Overview]:{
    name:"Matthew",
    intro:"procrastination"
  },
  [ConfigNames.Skills]:[
    {name:"CSS",    level:4,  description:'Web styling using .css files'},
    {name:"JSX",    level:4,  description:'Javascript + React'},
    {name:"TSX",    level:4,  description:'Javascript + React + Typescript'},
    {name:"C#",     level:5,  description:'CSharp using MVVM or Unity game engine'},
    {name:"C++",    level:3,  description:'if((C++)=>desc == null) return null;'},
    {name:"Python", level:4,  description:'from __future__ import description'},
    {name:"Java",   level:4,  description:'this.GetDescription().format(this.formatter.description)'},
  ],
  [ConfigNames.Projects]:[
    {name:'this', description:'This website was created with react'},
    {name:'temp', description:'Learned Things'},
    {name:'temp', description:'Learned Things'},
  ],
  [ConfigNames.Careers]:[
    {name:'temp', description:'Coded Things'},
    {name:'temp', description:'Coded Things'},
    {name:'temp', description:'Coded Things'},
  ],
  [ConfigNames.Education]:[
    {name:'temp', description:'Worked Things'},
    {name:'temp', description:'Worked Things'},
    {name:'temp', description:'Worked Things'},
  ],
  [ConfigNames.Inspector]:{ display: <div/>}
}
export default Data