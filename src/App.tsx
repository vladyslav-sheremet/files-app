import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

import { useFetchData } from './hooks/useFetchData'
import { IFile } from './models'
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage'
import { Loader } from './components/Loader/Loader'
import { File } from './components/File/File'
import { Button } from './components/Button/Button'

function App() {
  const [cookies, setCookie] = useCookies(['filteredDataBy'])
  const { filesFolder, loading, error } = useFetchData()
  const [data, setData] = useState<IFile[]>(filesFolder)

  const sortBySize = [...filesFolder].sort((a, b) => b.size - a.size)
  const sortByAtime = [...filesFolder].sort((a, b) => b.atime - a.atime)
  const sortByMtime = [...filesFolder].sort((a, b) => b.mtime - a.mtime)
  const sortByName = [...filesFolder].sort((a, b) => a.name.localeCompare(b.name))

  const filteredDataSize = () => {
    setData(sortBySize)
    setCookie('filteredDataBy', 'filteredDataSize', { path: '/' })
  }
  const filteredDataAtime = () => {
    setData(sortByAtime)
    setCookie('filteredDataBy', 'filteredDataAtime', { path: '/' })
  }
  const filteredDataMtime = () => {
    setData(sortByMtime)
    setCookie('filteredDataBy', 'filteredDataMtime', { path: '/' })
  }
  const filteredDataName = () => {
    setData(sortByName)
    setCookie('filteredDataBy', 'filteredDataName', { path: '/' })
  }

  const cookie = cookies.filteredDataBy

  useEffect(() => {
    setData(
      cookie === 'filteredDataSize' ? sortBySize
        : cookie === 'filteredDataAtime' ? sortByAtime
          : cookie === 'filteredDataMtime' ? sortByMtime
            : cookie === 'filteredDataName' ? sortByName
              : filesFolder
    )
  }, [filesFolder])

  return (
    <div className="container">
      {error && <ErrorMessage error={error} />}
      <div className="buttons-wrapper">
        <Button filteredDataHandler={filteredDataSize} text='Sort by Size' active={cookie === 'filteredDataSize'} />
        <Button filteredDataHandler={filteredDataAtime} text='Sort by Creation Time' active={cookie === 'filteredDataAtime'} />
        <Button filteredDataHandler={filteredDataMtime} text='Sort by Modification Time' active={cookie === 'filteredDataMtime'} />
        <Button filteredDataHandler={filteredDataName} text='Sort by Name' active={cookie === 'filteredDataName'} />
      </div>
      {loading ? <Loader /> : (
        <div className="files-wrapper">
          {data.map(file => <File key={file.size + Math.random()} file={file} />)}
        </div>
      )}

    </div>
  )
}

export default App;
