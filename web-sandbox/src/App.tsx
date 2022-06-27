import React from 'react';
import { ResponsiveGridLayout} from './components/GridLayout';
import { Layouts } from 'react-grid-layout';
import {Data} from './constants/Data'
import { IConfig, IBasicData, ConfigNames} from './constants/ConfigTypes';
import {AllLayouts as defaultLayouts} from './Initial-Layouts'
import { ClickArgs } from './constants/ClickArgs';
import Widgets from './components/Widgets'

import "./styles/app.css"
import './styles/react-grid-layout.css'
import { Tag } from './components/Tags';


function generateWidgetDOM(config:IConfig, onTagClick?:(args : ClickArgs<IBasicData>) => void) {
  let onTagClickRes = onTagClick ? onTagClick : () => {}

  const Views : {[k in ConfigNames]:JSX.Element} = {
    [ConfigNames.Overview]:  <Widgets.Overview {...config[ConfigNames.Overview]} />,
    [ConfigNames.Skills]:    <Widgets.Skills     name={ConfigNames.Skills}    items={config[ConfigNames.Skills]}    onClick={onTagClickRes} />, 
    [ConfigNames.Projects]:  <Widgets.Projects   name={ConfigNames.Projects}  items={config[ConfigNames.Projects]}  onClick={onTagClickRes} />,
    [ConfigNames.Careers]:   <Widgets.Careers    name={ConfigNames.Careers}   items={config[ConfigNames.Careers]}   onClick={onTagClickRes} />,
    [ConfigNames.Education]: <Widgets.Education  name={ConfigNames.Education} items={config[ConfigNames.Education]} onClick={onTagClickRes} />,
    [ConfigNames.Inspector]: <Widgets.Inspector { ...config[ConfigNames.Inspector] }/>
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
  const [config, setConfig] = React.useState<IConfig>({...Data, [ConfigNames.Inspector]:{display: <span>Click <Tag divProps={{ 
      style:{display:'inline-block'}, 
      onClick:(args) => updateConfig( {event:args, item:inspectorItem} )}} 
      data={inspectorItem}   
    /></span>}})
  
  function updateConfig(args:ClickArgs<IBasicData>){
    setConfig({
      ...config,
      [ConfigNames.Inspector]: {display:<div>{`${args.item.name}: ${args.item.description}`}</div>}
    })
  }

  return (
    <div className="app" >
      <div>
        <ResponsiveGridLayout 
          isBounded={true}
          layouts={layouts}
          onLayoutChange={(_, allLayouts) => { setLayouts(allLayouts)}}
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
