import React from "react";
import { UpdateInspectorArgs } from "../../../constants/ClickArgs";
import { ConfigNames, getItemOrDefault, IBasicData, IConfig } from "../../../constants/config-types";
import Tag from "../../tags/Tag";
import { GenericFallback } from "./GenericFallback";
import { GenericNodeProps, ItemNode } from "./ItemNode";
import { CPlusPlus } from "./languages/CPlusPlus";
import { CSharp } from "./languages/CSharp";
import { CSS } from "./languages/CSS";
import { Java } from "./languages/Java";
import { JSX } from "./languages/JSX";
import { Python } from "./languages/Python";
import { TSX } from "./languages/TSX";
import { AutoIVV } from "./projects/AutoIVV";
import { DMManager } from "./projects/DMManager";
import { GreedQuest } from "./projects/GreedQuest";
import { MeleeUpgrade } from "./projects/MeeleeUpgrade";
import { MinecraftPlugin } from "./projects/MinecraftPlugin";
import { RAPT } from "./projects/RAPT";
import { ThisWebsite } from "./projects/ThisWebsite";
import { UnityCBCC } from "./projects/UnityCBCC";

let NamedViews : {[k1 in ConfigNames]:{[k2:string]:ItemNode | undefined}} = {
  Overview: {},
  Languages: {
    "C++": CPlusPlus,
    "C#": CSharp,
    "CSS":CSS,
    "Java":Java,
    "JSX":JSX,
    "Python":Python,
    "TSX":TSX
  },
  Projects: {
    'Melee Upgrade': MeleeUpgrade,
    'DM Manager': DMManager,
    'Greed Quest':GreedQuest,
    'this':ThisWebsite,
    'Minecraft Plugin':MinecraftPlugin,
    'RAPT':RAPT,
    'Auto IVV':AutoIVV,
    'Unity CBCC':UnityCBCC
  },
  Background: {
  },
  Inspector: {

  },
  Skills: {

  }
}
//TODO: relocate these
export function NamedView(props:{nodeProps:GenericNodeProps<IBasicData>, configName:ConfigNames}){
  let View = NamedViews[props.configName][props.nodeProps.item.name]
  return View ? <View {...props.nodeProps} /> : <GenericFallback {...props.nodeProps} />
}
export type TagType = ConfigNames.Languages | ConfigNames.Projects | ConfigNames.Skills | ConfigNames.Background
export function makeTags(names:string[], configName:TagType, config:IConfig, updateInspector: (args:UpdateInspectorArgs) => void, style?:React.CSSProperties){
  return names.map( (name) => {
    let item : IBasicData = getItemOrDefault(config[configName], name)

    return <Tag data={item} key={item.name} divProps={{ style, onClick:(_) => updateInspector( {getInspectorSettings(config) {
      return {
        ...item,
        display: <NamedView configName={configName} nodeProps={{config, item, updateInspector}} />
      }
    }})}} />
  })
}