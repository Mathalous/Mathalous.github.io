import React from 'react';
import { ResponsiveGridLayout} from './components/GridLayout';
import { Layouts } from 'react-grid-layout';
import {Data} from './constants/Data'
import { IConfig, IBasicData, ConfigNames} from './constants/config-types';
import {AllLayouts as defaultLayouts} from './initial-layouts'
import { ClickArgs } from './constants/ClickArgs';
import Widgets from './components/widgets'
import { Tag } from './components/tags';
import { NamedView } from './components/widgets/sub-components';

import "./styles/app.css"
import './styles/react-grid-layout.css'


function generateWidgetDOM(config:IConfig, onTagClick?:(args:{clickArgs : ClickArgs<IBasicData>, configName:ConfigNames }) => void) {
  function onTagClickRes( configName:ConfigNames ){
    return function (args: ClickArgs<IBasicData>) {
      if(onTagClick)
        onTagClick({ clickArgs: args, configName })
    }
  }
  

  const Views : {[k in ConfigNames]:JSX.Element} = {
    [ConfigNames.Overview]:   <Widgets.Overview   {...config[ConfigNames.Overview]} />,
    [ConfigNames.Inspector]:  <Widgets.Inspector  { ...config[ConfigNames.Inspector] }/>,
    [ConfigNames.Languages]:  <Widgets.Languages  name={ConfigNames.Languages}  items={config[ConfigNames.Languages]}  onClick={onTagClickRes(ConfigNames.Languages)} />, 
    [ConfigNames.Projects]:   <Widgets.Projects   name={ConfigNames.Projects}   items={config[ConfigNames.Projects]}   onClick={onTagClickRes(ConfigNames.Projects)} />,
    [ConfigNames.Background]: <Widgets.Background name={ConfigNames.Background} items={config[ConfigNames.Background]} onClick={onTagClickRes(ConfigNames.Background)} />,
    [ConfigNames.Skills]:     <Widgets.Skills     name={ConfigNames.Skills}     items={config[ConfigNames.Skills]}     onClick={onTagClickRes(ConfigNames.Skills)} />,
  }
  
  return Object.keys(ConfigNames).map( (key) => {
    return <div key={key}>
      {Views[key as ConfigNames]}
    </div>
  } )
}

function App() {
  const [devMode, setDevMode] = React.useState<boolean>(false)
  const [layouts, setLayouts] = React.useState<Layouts>(defaultLayouts) 
  const inspectorItem = {name:'Things', level:5, description:'Not this one'}
  const [config, setConfig] = React.useState<IConfig>({...Data, [ConfigNames.Inspector]:{name:'Default', description:'',
    display: <span>Click <Tag divProps={{ 
      style:{display:'inline-block'}, 
      onClick:(args) => updateConfig( {clickArgs:{event:args, item:inspectorItem}, configName:ConfigNames.Inspector})}} 
      data={inspectorItem}   
    /></span>}})
  
  function updateConfig(args:{clickArgs : ClickArgs<IBasicData>, configName:ConfigNames }){
    setConfig({
      ...config,
      [ConfigNames.Inspector]: {name:args.clickArgs.item.name, description:args.clickArgs.item.description,
         display:<NamedView item={args.clickArgs.item} />} 
    })
  }

  return (
    <div className="app" >
      <div >
        <ResponsiveGridLayout 
          containerPadding={[15,15]} /* <-- Work around for bottom scrollbar appearing when side scrollbar is needed due to overlapping scroll bar */
          style={{position:'relative', overflow:'auto'}}
          isBounded={true}
          layouts={layouts}
          /*TODO: remove commented code, use example logic for setting grid parent's style={{width:'50%', margin:'auto'}} */
          onLayoutChange={(_, allLayouts) => { /*console.log('layout',_ === allLayouts['xxs']);*/  setLayouts(allLayouts)}}
        >
          {generateWidgetDOM(config, (args) => updateConfig(args))}
        </ResponsiveGridLayout>
      </div>
      <form style={{ marginLeft:'10px', color:'white', opacity: devMode ? 1 : 0.2}}>
        <input style={{marginLeft:0}} name='devToggle'  type="checkbox" checked={devMode} onChange={(args) => setDevMode(args.target.checked)}/>
        <label htmlFor='devToggle'>Dev Mode</label>
      </form>
      {
        devMode ? <span>
          <button onClick={() => console.log('layouts', layouts)}>log layout</button>
          <button onClick={() => console.log('config', config) }>log config</button>
        </span> : <span/>
      }
    </div>
  );
}

export default App;
