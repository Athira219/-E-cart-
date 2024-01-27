import { useEffect, useState } from "react"



const useFetch = (url)=>{
    const [value,setValue] = useState(null)
    console.log(value);
    useEffect (()=>{
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                
                setValue(data)
                
            })
        })
    },[])
    return value

}

export default useFetch;