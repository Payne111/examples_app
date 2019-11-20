import React from 'react'
import './App.css'

const demoComponents = []
const examplesContext = require.context('./examples/', true, /src$/)
examplesContext.keys().forEach(filePath => {
  const module = examplesContext(filePath)
  const component = module.default
  demoComponents.push({
    key: filePath.split('/')[1],
    component
  })
})

const demoCodeTable = {}
const demoCodeContext = require.context('./demoCode/', true, /\.js$/)
demoCodeContext.keys().forEach(filePath => {
  const module = demoCodeContext(filePath)
  const code = module.default
  demoCodeTable[filePath.split('.')[1].replace('/', '')] = code
})

function App() {
  return (
    <div>
      {demoComponents.map(compInfo => {
        const Comp = compInfo.component
        return (
          <div key={compInfo.key}>
            <div>预览</div>
            <Comp></Comp>
            <div>代码</div>
            <pre>{demoCodeTable[compInfo.key]}</pre>
          </div>
        )
      })}
    </div>
  )
}

export default App
