import React from "react";
import { makeTags } from "..";
import { ConfigNames, IBackground } from "../../../../constants/config-types";
import { GenericNodeProps } from "../ItemNode";

export function WorkHistory (props: GenericNodeProps<IBackground>){
  return <div>
    <h3 style={{textAlign:'center'}}>{props.item.name}</h3>
    <p>
      Before I got my degree, I worked in the service industry. While waiting tables wasn't the most enjoyable job, it taught patience when dealing with people.
    </p>
    <p style={{display:'inline'}}>
      During college, I interned with Radiance Technologies for two years. The people I worked with and the project we were developing were enjoyable to work with. If they had room for another full-time developer when I graduated, I would have preferred to stay, but the work wasn’t there. I am glad that we finished out the project before I had to transfer.
    </p>
    &nbsp;
    {makeTags(["RAPT"], ConfigNames.Projects, props.config, props.updateInspector)}
    <p/>
    <p style={{display:'inline'}}>
      Radiance had just won the prime contractor slot for a DoD IVV role and were looking for people to fill the seats. I was hoping I would learn about the testing side of software, but IVV wasn’t really what I was looking for. I stuck with it for a few years, but decided to move. on when the prime contract went to another vender.
    </p>
    &nbsp;
    {makeTags(["Auto IVV"], ConfigNames.Projects, props.config, props.updateInspector)}
    <p/>
    <p>
      I’m currently enjoying working with various technologies that I haven’t used before. This was my first time working with web-development and ended up being a full stack developer. I’ve set up data pipes between Kafka, databases, and other services using Avro encoding and piped it through to the client upon request/socket connection. Upon receiving the data, I put my UX hat on and present the data and controls available to the software.  
    </p>
  </div>
}
    
