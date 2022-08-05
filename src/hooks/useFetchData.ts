import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'

import { IFile } from '../models'

export const useFetchData = () => {
    const [filesFolder, setFilesFolder] = useState<IFile[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchData = async () => {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get('https://prof.world/api/test_json_files/?token=6a06cc0050374e32be51125978904bd8')
            setLoading(false)
            setFilesFolder([...response.data.data.files.Folder1, ...response.data.data.files.Folder2, ...response.data.data.files.Folder3])
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {filesFolder, loading, error}
}