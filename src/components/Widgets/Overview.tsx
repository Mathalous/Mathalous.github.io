import React, { CSSProperties } from "react";
import { GridSection } from "../sections/GridSection";
import { IOverview } from "../../constants/config-types";

export function Overview(props: Partial<IOverview>){
  const defaultProps = {name:"Overview", intro:"I See Things"}
  const newProps = {...defaultProps, ...props}
  const logo = newProps.image ? <img style={{margin:'auto'}} alt="My face" src={newProps.image} /> : undefined
  let logoStyle : CSSProperties = {
    flex:'1 1', overflow:'hidden', 
    borderRadius:'0% 50% / 50%',  }

  return <GridSection id="Overview" name='Overview'>
    <div style={{padding:'2px', textAlign:'center'}}>
      <div style={{ display:'inline-flex'}}>
        <div style={logoStyle}>
          {logo}
        </div>
        <div style={{flex:'2 1', alignSelf:'center'}}>
          <label><strong>{newProps.name}</strong></label>
          <br/>
          <label style={{fontSize:'.7em'}}>Software Engineer</label>
        </div>
    </div>
      {/* TODO: self fitting font size */}
      <p style={{fontSize:'.8em'}}>{newProps.description}</p> 
    </div>
  </GridSection>
}
export default Overview