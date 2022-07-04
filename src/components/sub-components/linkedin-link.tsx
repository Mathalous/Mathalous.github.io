import React from "react";
import './linkedin-link.css'

export function LinkedinLink(props:{src:string}){
  return <div  >
    <a className="linkedin-a"  href={props.src} rel='noreferrer' target='_blank'><strong>in</strong></a>
  </div>
}