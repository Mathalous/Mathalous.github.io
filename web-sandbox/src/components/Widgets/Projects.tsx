import { TagSectionProps, TagSection } from "../Tags/TagSection";
import { IProject } from "../../constants/ConfigTypes";
import React from "react";

export function Projects(props:TagSectionProps<IProject>) {return <TagSection {...props} />}
export default Projects;