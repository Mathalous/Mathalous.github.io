import React from "react";

export const TagGroup = (props:{children?:JSX.Element[] | JSX.Element, style?:React.CSSProperties}) => {
  return <div className="tagGroup" style={props.style}>
    {props.children}
  </div>
}
export default TagGroup