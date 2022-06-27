export enum ClassNames{
  noDrag = 'nodrag',
  drag = 'drag',
  handleText = 'handle-text',
  handle = 'react-grid-handle',
  gridBody = 'react-grid-body',
  gridItem = 'grid-item',
}
export const ReactGridSelectors = {
  noDrag : `.${ClassNames.noDrag}`,
  drag : `.${ClassNames.drag}`
}