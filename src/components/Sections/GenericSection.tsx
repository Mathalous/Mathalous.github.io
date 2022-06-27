import { IBasicData } from "../../constants/ConfigTypes";
import { TagSectionProps, TagSection } from "../Tags/TagSection";
import React from "react";

export function GenericSection<T extends IBasicData>(props:TagSectionProps<T>) {return <TagSection {...props} />}
export default GenericSection