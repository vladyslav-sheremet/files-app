import { IFile } from '../../models'

import './File.css'

interface FileProps {
    file: IFile
}

export const File = ({file}: FileProps) => {
    const creationTime = new Date(file.atime).toString()

    return (
        <div className="file" key={file.size + Math.random()}>
            <img className="file-img" src="./file.svg" alt="" />
            <p>{file.name}</p>
            {/* <p>ATIME {creationTime}</p>
            <p>DEV {file.dev}</p>
            <p>MTIME {file.mtime}</p>
            <p>SIZE {file.size}</p> */}
        </div>
    )
}