import React from "react";
import RGL, { ReactGridLayoutProps, WidthProvider, Layout, ResponsiveProps, Responsive } from "react-grid-layout";
import {ReactGridSelectors as Selectors} from '../constants/ClassNames'
import '../styles/react-grid-layout.css'

const ReactGridLayout = WidthProvider(RGL);
const ReactGridLayoutResponsive = WidthProvider(Responsive)
export const GridLayout = (props : ReactGridLayoutProps) => {
  const defaultProps : Partial<ReactGridLayoutProps> = {
    useCSSTransforms:true,
    draggableCancel:Selectors.noDrag,
    draggableHandle:Selectors.drag,
    rowHeight:30,
    cols:24,
    onLayoutChange: () => {},
  }
  return <ReactGridLayout {...{...defaultProps, ...props}} />
}

export const ResponsiveGridLayout = (props:Partial<ResponsiveProps>) => {
  const defaultProps : ResponsiveProps = {
    breakpoints:{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
    cols:{lg: 22, md: 12, sm: 7, xs: 6, xxs: 4},
    useCSSTransforms:true,
    rowHeight:30,
    draggableCancel:Selectors.noDrag,
    draggableHandle:Selectors.drag,
    layouts:{
      'lg':generateLayout(15),
      'md':generateLayout(15),
      'sm':generateLayout(15),
      'xs':generateLayout(15),
      'xxs':generateLayout(15)
    }
  }

  return <ReactGridLayoutResponsive {...{...defaultProps, ...props}} />
}

//Generic layout to get things on the screen. Arranging it through the controls is easier. 
//Debug controls allow logging the layout and copy/pasting to initial-layouts
export function generateLayout(count:number):Layout[] {
  let res = []
  for(let i = 0; i < count; i++){
    res.push( {
      x: (i * 2) % 12,
      y: Math.floor(i / 6) * 2,
      w: 2,
      h: 2,
      i: i.toString()
    })
  }
  return res;
}

export default GridLayout;