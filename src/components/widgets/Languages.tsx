import React from "react";
import { TagSection, TagSectionProps } from "../tags/TagSection";
import { ILanguage } from "../../constants/config-types";

export function Languages(props: TagSectionProps<ILanguage>) {
  return <TagSection {...props} />
}
export default Languages