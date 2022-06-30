import React from "react";
import {GridSection} from "../sections/GridSection";
import { IInspectorSettings, ConfigNames } from "../../constants/config-types";

export function Inspector(props:IInspectorSettings){
  return <GridSection id={ConfigNames.Inspector} name={ConfigNames.Inspector} >
    {props.display}
  </GridSection>
}

export default Inspector