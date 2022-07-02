import React from "react";
import { ConfigNames, IBasicData } from "../../../constants/config-types";
import { GenericFallback } from "./GenericFallback";
import { GenericNodeProps, ItemNode } from "./ItemNode";
import { CPlusPlus } from "./languages/CPlusPlus";
import { CSharp } from "./languages/CSharp";
import { CSS } from "./languages/CSS";
import { Java } from "./languages/Java";
import { JSX } from "./languages/JSX";
import { Python } from "./languages/Python";
import { TSX } from "./languages/TSX";

let NamedViews : {[k in ConfigNames]:{[n:string]:ItemNode | undefined}} = {
  Overview: {

  },
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

  },
  Background: {

  },
  Inspector: {

  },
  Skills: {

  }
}

export function NamedView(props:{nodeProps:GenericNodeProps<IBasicData>, configName:ConfigNames}){
  let View = NamedViews[props.configName][props.nodeProps.item.name]
  return View ? <View {...props.nodeProps} /> : <GenericFallback {...props.nodeProps} />
}