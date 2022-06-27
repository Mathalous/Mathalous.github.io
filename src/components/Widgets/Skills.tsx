import React from "react";
import { TagSection, TagSectionProps } from "../Tags/TagSection";
import { ISkill } from "../../constants/ConfigTypes";

export function Skills(props: TagSectionProps<ISkill>) {
  return <TagSection {...props} />
}
export default Skills