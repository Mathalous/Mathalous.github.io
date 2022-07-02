
import { UpdateInspectorArgs } from "../../../constants/ClickArgs"
import { IBasicData } from "../../../constants/config-types"

export interface GenericNodeProps<T extends IBasicData> {
  item:T, 
  updateInspector: (args:UpdateInspectorArgs) => void
}
export interface NamedNodeProps extends GenericNodeProps<IBasicData>{}

export type ItemNode = (props:NamedNodeProps) => JSX.Element
