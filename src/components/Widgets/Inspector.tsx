import React from "react";
import {Section} from "../Sections/Section";
import { IInspectorSettings, ConfigNames } from "../../constants/ConfigTypes";

export function Inspector(props:IInspectorSettings){
  return <Section id={ConfigNames.Inspector} name={ConfigNames.Inspector} >
    {props.display}
  </Section>
}

export default Inspector