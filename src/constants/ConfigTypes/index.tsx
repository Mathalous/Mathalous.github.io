export interface IOverview{
  imageUrl?:string,
  name:string,
  intro:string,
}
export interface IBasicData{
  name:string,
  description:string
}
export interface ISkill extends IBasicData{
  level:number,
}

export interface IProject extends IBasicData{}
export interface IJob extends IBasicData{}
export interface IDegree extends IBasicData{}
export interface IInspectorSettings {
  display:JSX.Element
}

export enum ConfigNames{
  Overview  = 'Overview',
  Skills    = 'Skills',
  Projects  = 'Projects',
  Careers   = 'Careers',
  Education = 'Education',
  Inspector = 'Inspector'
}

export interface IConfig{
  [ConfigNames.Overview]: IOverview,
  [ConfigNames.Skills]:   ISkill[],
  [ConfigNames.Projects]: IProject[],
  [ConfigNames.Careers]:  IJob[],
  [ConfigNames.Education]:IDegree[],
  [ConfigNames.Inspector]:IInspectorSettings,
}
