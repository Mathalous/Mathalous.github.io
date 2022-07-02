import { ConfigNames, IBasicData, IConfig, IInspectorSettings } from "./config-types"

export interface ClickArgs<T>{
  item:T,
  event:React.MouseEvent<HTMLDivElement, MouseEvent>,
}


export type TagClickCallbackArgs = {clickArgs : ClickArgs<IBasicData>, configName:ConfigNames }
export type CustomUpdateArgs = {getInspectorSettings:(config:IConfig) => IInspectorSettings }
export type UpdateInspectorArgs = TagClickCallbackArgs | CustomUpdateArgs