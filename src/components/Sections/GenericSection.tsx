import { IBasicData } from "../../constants/config-types";
import { TagSectionProps, TagSection } from "../tags/TagSection";
import React from "react";

export function GenericSection<T extends IBasicData>(props:TagSectionProps<T>) {return <TagSection {...props} />}
export default GenericSection