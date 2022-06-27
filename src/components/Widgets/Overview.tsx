import React from "react";
import { Section } from "../Sections/Section";
import { IOverview } from "../../constants/ConfigTypes";

export function Overview(props: Partial<IOverview>){
  const defaultProps = {name:"Overview", intro:"I See Things"}
  const newProps = {...defaultProps, ...props}
  return <Section id="Overview" name='Overview'>
    <div style={{padding:'5px'}}>
      <h1>{newProps.name}</h1>
      <p>{newProps.intro}</p>
    </div>
  </Section>
}
export default Overview