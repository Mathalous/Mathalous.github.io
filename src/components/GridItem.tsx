import React from 'react'
import { ClassNames } from '../constants/ClassNames';

interface GridItemProps{
  children?: React.ReactNode,
  handle?:React.ReactNode,
  id:string,
}

function InternalGridItem(props : GridItemProps){
  return <div className={ClassNames.gridItem}>
    <div className={`${ClassNames.drag} ${ClassNames.handle}`}>
      {props.handle}
    </div>
    <div className={`${ClassNames.noDrag} ${ClassNames.gridBody}`}>
      {props.children}
    </div>
  </div>
}

export function GridItem(props : GridItemProps){
  const defaultProps : Partial<GridItemProps> = {
    handle: <label className={ClassNames.handleText}>{props.id}</label>
  }
  return <InternalGridItem {...{...defaultProps, ...props}}/>
}
