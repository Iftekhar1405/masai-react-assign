import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url:string) => {

    interface fetchedData{
        userId:number,
        id:number,
        title:string,
        body:string,
    }

    const [data,setData] = useState<fetchedData[]>([])
    const [error,setError] = useState<boolean>(false)
    const [loading,setLoading] = useState<boolean>(true)
    
    useEffect(()=>{
        const fetchData = async () => {
            try {
                let res = await axios.get(url)
            let resData = res.data
            setData(resData)
            setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(true)
            } finally{
                setLoading(false)
            }
            
        }
        fetchData()
    

    },[url])
    
    return {data,error,loading}

}

export default useFetch