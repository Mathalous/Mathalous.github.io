export enum ConfigNames{
  Overview   = 'Overview',
  Languages  = 'Languages',
  Projects   = 'Projects',
  Background = 'Background',
  Inspector  = 'Inspector',
  Skills     = 'Skills',
}
export interface IBasicData{
  name:string,
  description:string
}
export interface IOverview extends IBasicData{
  image?:string,
}
export interface ISkill extends IBasicData{
  level:number,
}
export interface ILanguage extends ISkill{}
export interface IProject extends IBasicData{}
export interface IBackground extends IBasicData{}
export interface IInspectorSettings extends IBasicData{
  display:JSX.Element
}

export interface IConfig{
  [ConfigNames.Overview]:   IOverview,
  [ConfigNames.Skills]:     ISkill[],
  [ConfigNames.Languages]:  ILanguage[],
  [ConfigNames.Projects]:   IProject[],
  [ConfigNames.Background]: IBackground[],
  [ConfigNames.Inspector]:  IInspectorSettings,
}
