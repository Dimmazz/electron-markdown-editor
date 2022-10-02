import React, { useCallback, useState } from 'react'
import Editor from './editor'
import Preview from './preview'
import './app.scss'

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# hello, World!')

  const handleDocChange = useCallback((newDoc: any) => {
    setDoc(newDoc)
  }, [])
  return (
    <div className="app">
      <Editor
        onChange={handleDocChange}
        initialDoc={doc}
      />
      <Preview doc={doc} />
    </div>
  )
}

export default App
