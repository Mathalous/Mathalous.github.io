import { TagSectionProps, TagSection } from "../tags/TagSection";
import { IProject } from "../../constants/config-types";
import React from "react";

export function Projects(props:TagSectionProps<IProject>) {return <TagSection {...props} />}
export default Projects;