import React from "react";

export const TagGroup = (props:{children?:JSX.Element[] | JSX.Element}) => {
  return <div className="tagGroup">
    {props.children}
  </div>
}
export default TagGroup