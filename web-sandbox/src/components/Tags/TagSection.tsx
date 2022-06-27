import { ClickArgs } from "../../constants/ClickArgs";
import { IBasicData } from "../../constants/ConfigTypes";
import {Section} from "../Sections/Section";
import React from "react";
import { TagGroup } from "./TagGroup";
import { Tag } from "./Tag";

export type TagSectionProps<T> = {
  onClick:(args:ClickArgs<T>) => void, items:T[], name:string
}
export function TagSection<T extends IBasicData>(props:TagSectionProps<T>){
  return (
    <Section id={props.name} name={props.name}>
      <TagGroup>
        {
          props.items.map( (item, index) => {
            return <Tag key={index} data={item} divProps={{ onClick:(event) => { if(!props.onClick) return; props.onClick({event, item}) } }} />
          })
        }
      </TagGroup>
    </Section>
  )
}
export default TagSection