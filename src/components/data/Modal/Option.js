import React from 'react'
import styles from './Option.module.css';
import { AiOutlineEye,AiOutlineDownload } from "react-icons/ai";
const Option = ({toggle,action}) => {

console.log(toggle.toggle);
    const dropdownItem = 
        [
            {
              
              "name": "View",
              "icon":<AiOutlineEye/>
            },
            {
                "name":"Download",
                "icon":<AiOutlineDownload/>
            },
            {
                "name":"Rename",
                "icon":<AiOutlineDownload/>
            },
            {
                "name":"Share Link",
                "icon":<AiOutlineDownload/>
            },
            {
                "name":"Move",
                "icon":<AiOutlineDownload/>
            },
            {
                "name":"Mark Private",
                "icon":<AiOutlineDownload/>
            },
            {
                "name":"Delete",
                "icon":<AiOutlineDownload/>
            },
        ]
  return (
    <div >
    <div className={styles.option} onClick={action}>
        <ul>
        {
            dropdownItem.map((item, idex)=>{
                return(
                <div className={styles.list} >
                    <span>{item.icon}</span>
                    <li>{item.name}</li>
                </div>
                )
            })
        }
        </ul>
    </div>
    </div>
  )
}

export default Option