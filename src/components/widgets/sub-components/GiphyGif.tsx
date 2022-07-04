import React from "react";
const defaultStyle : React.CSSProperties = {
  flex:'1 1',
  flexDirection:'column'
}
export function Giphy(props:{title:string, src:string, style?:React.CSSProperties}){
    return <div style={{...defaultStyle, ...props.style}}>
      <iframe title={props.title} style={{display:'block', margin:'auto', height:'100%', width:'100%'}} src={props.src} 
        frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
  </div>
}