import { TagSectionProps } from "../Tags/TagSection";
import { IJob } from "../../constants/ConfigTypes";
import GenericSection from "../Sections/GenericSection";

export function Careers(props:TagSectionProps<IJob>){return GenericSection(props)}
export default Careers