import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GetName = ({url,name}) => {

    const [value, setValue] = useState('Loading....');
    

    useEffect(()=>{
        if(name === 'species'){

            if(url[0] && url.length>0){
                    axios.get(url[0])
                         .then(
                            res=>{setValue(res.data.name)}
                         )
            }
            else{
                setValue(" ");
            }
        }
        else{
            if(url!=null){
                axios.get(url)
                     .then(
                        res=>{setValue(res.data.name)}
                     )
            }
            else{
                setValue(" ");
            }
        }
        
        
    },[])
    // if(name==='species' && url[0] && url.length>0){
    //     console.log(url);
    // }
    // else{
    //     console.log(" ")
    // }

    // if(name ==='homeworld'){
    //     console.log(url);
    // }

  return (
    <div>{value}</div>
  )
}

export default GetName