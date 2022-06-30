import React from "react";
import { TagSection, TagSectionProps } from "../tags/TagSection";
import { ISkill } from "../../constants/config-types";

export function Skills(props: TagSectionProps<ISkill>) {
  return <TagSection {...props} />
}
export default Skills