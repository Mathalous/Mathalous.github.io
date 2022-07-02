import React from "react";
import {GridSection} from "../sections/GridSection";
import { IInspectorSettings, ConfigNames } from "../../constants/config-types";

export function Inspector(props:IInspectorSettings){
  return <GridSection id={ConfigNames.Inspector} name={ConfigNames.Inspector} >
    <div style={{padding:'10px'}}>
      {props.display}
    </div>
  </GridSection>
}

export default Inspector