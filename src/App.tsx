import React from 'react';
import { ResponsiveGridLayout} from './components/GridLayout';
import { Layouts } from 'react-grid-layout';
import {Data} from './constants/Data'
import { IConfig, IBasicData, ConfigNames} from './constants/config-types';
import {AllLayouts as defaultLayouts} from './initial-layouts'
import { ClickArgs, CustomUpdateArgs, TagClickCallbackArgs, UpdateInspectorArgs } from './constants/ClickArgs';
import Widgets from './components/widgets'
import { Tag } from './components/tags';
import { NamedView } from './components/widgets/sub-components';

import "./styles/app.css"
import './styles/react-grid-layout.css'


function onTagClickRes( configName:ConfigNames, onTagClick?:(args:{clickArgs : ClickArgs<IBasicData>, configName:ConfigNames }) => void ){
  return function (args: ClickArgs<IBasicData>) {
    if(onTagClick)
      onTagClick({ clickArgs: args, configName })
  }
}
function generateWidgetDOM(config:IConfig, onTagClick?:(args:UpdateInspectorArgs) => void) {

  const Views : {[k in ConfigNames]:JSX.Element} = {
    [ConfigNames.Overview]:   <Widgets.Overview   {...config[ConfigNames.Overview]} />,
    [ConfigNames.Inspector]:  <Widgets.Inspector  { ...config[ConfigNames.Inspector] }/>,
    [ConfigNames.Languages]:  <Widgets.Languages  name={ConfigNames.Languages}  items={config[ConfigNames.Languages]}  onClick={onTagClickRes(ConfigNames.Languages, onTagClick)} />, 
    [ConfigNames.Projects]:   <Widgets.Projects   name={ConfigNames.Projects}   items={config[ConfigNames.Projects]}   onClick={onTagClickRes(ConfigNames.Projects, onTagClick)} />,
    [ConfigNames.Background]: <Widgets.Background name={ConfigNames.Background} items={config[ConfigNames.Background]} onClick={onTagClickRes(ConfigNames.Background, onTagClick)} />,
    [ConfigNames.Skills]:     <Widgets.Skills     name={ConfigNames.Skills}     items={config[ConfigNames.Skills]}     onClick={onTagClickRes(ConfigNames.Skills, onTagClick)} />,
  }
  
  return Object.keys(ConfigNames).map( (key) => {
    return <div key={key}>
      {Views[key as ConfigNames]}
    </div>
  } )
}

function App() {
  const defaultInspectorItem = {name:'Things', level:5, description:'Not this one'}

  const [devMode, setDevMode] = React.useState<boolean>(false)
  const [layouts, setLayouts] = React.useState<Layouts>(defaultLayouts) 
  const [config, setConfig] = React.useState<IConfig>({...Data, [ConfigNames.Inspector]:{name:'Default', description:'',
    display: <span>Click <Tag 
      data={defaultInspectorItem}   
      divProps={{ 
        style:{display:'inline-block'}, 
        onClick:(args) => updateInspector( {clickArgs:{event:args, item:defaultInspectorItem}, configName:ConfigNames.Inspector})}} 
      />
    </span>}})
  
    function updateInspector(args:UpdateInspectorArgs){
      if((args as TagClickCallbackArgs).configName){
        updateConfig(args as TagClickCallbackArgs)
        return;
      }
      if((args as CustomUpdateArgs).getInspectorSettings){
        var inspectorArgs = (args as CustomUpdateArgs).getInspectorSettings(config);
        console.log(inspectorArgs)
        setConfig({
          ...config,
          [ConfigNames.Inspector]: {...inspectorArgs}} 
        )
        return;
      }
      console.log('unexpected args in update inspector', args)
    }

  function updateConfig(args:{clickArgs : ClickArgs<IBasicData>, configName:ConfigNames }){
    setConfig({
      ...config,
      [ConfigNames.Inspector]: {name:args.clickArgs.item.name, description:args.clickArgs.item.description,
         display:<NamedView nodeProps={{item:args.clickArgs.item, updateInspector}} configName={args.configName} />} 
    })
  }

  return (
    <div className="app" >
      <div style={{width:'100%', textAlign:'center', padding:'10px', color:'whitesmoke'}}>
        Work in progress
      </div>
      <div >
        <ResponsiveGridLayout 
          containerPadding={[15,15]} /* <-- Work around for bottom scrollbar appearing when side scrollbar is needed due to overlapping scroll bar */
          style={{position:'relative', overflow:'auto'}}
          isBounded={true}
          layouts={layouts}
          /*TODO: remove commented code, use example logic for setting grid parent's style={{width:'50%', margin:'auto'}} */
          onLayoutChange={(_, allLayouts) => { /*console.log('layout',_ === allLayouts['xxs']);*/  setLayouts(allLayouts)}}
        >
          {generateWidgetDOM(config, updateInspector)}
        </ResponsiveGridLayout>
      </div>
      {
        devMode ? <span>
          <button onClick={() => console.log('layouts', layouts)}>log layout</button>
          <button onClick={() => console.log('config', config) }>log config</button>
        </span> : undefined
      }
      <form style={{ marginLeft:'10px', color:'white', opacity: devMode ? 1 : 0.2}}>
        <input style={{marginLeft:0}} name='devToggle'  type="checkbox" checked={devMode} onChange={(args) => setDevMode(args.target.checked)}/>
        <label htmlFor='devToggle'>Dev Mode</label>
      </form>
    </div>
  );
}

export default App;
