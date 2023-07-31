import React, { useEffect, useState } from 'react';
import styles from './List.module.css';
import { BiDotsVerticalRounded } from "react-icons/bi";
import { PiFilmReelBold } from "react-icons/pi";
import Details from '../Modal/Details';
import axios from 'axios';
import GetName from '../getName/GetName';
import Option from '../Modal/Option';


export const List = ({ data, name }) => {

    const obj = {
        films: ["title", "director", "release_date"],
        people: ["name", "birth_year", "species"],
        planets: ["name", "climate", "gravity"],
        species: ["name", "homeworld", "average_lifespan"],
        starships: ["name", "model", "hyperdrive_rating"],
        vehicles: ["name", "model", "max_atmosphering_speed"]
    }

    const arr = obj[name] || [];

    const [toggle, setToggle] = useState(false)
    const [detail, setDetail] = useState({});

    const [open , setopen] = useState(false);
    const [value, setValue] = useState('');

    

    const handleListClick = (item) => {
        setDetail(item);
        setToggle(!toggle);

    }

   const handleDropdown=(index)=>{
        setopen(!open);
        setValue(index);
   }

 
   
    
    return (
        <div>
            {


                <table className={styles.table}>
                    <thead >
                        <tr>{
                            arr.map((value, index) => (
                                <th>{value}</th>
                            ))
                        }
                            <th>&emsp;</th>
                        </tr>
                    </thead>

                    <tbody className={styles.data}>
                        {
                            data.map((item, index) => (
                                <>
                                <tr key={index} >

                                    {arr.map((value, n) => (
                                        
                                        <td key={n} onClick={() => handleListClick(item)}>
                                            {
                                                
                                                n === 0 ?
                                                    <>
                                                    <PiFilmReelBold size={18} />{item[value]}
                                                    </>
                                                    :
                                                    <>{
                                                        value==='species' || value ==='homeworld'?
                                                        (
                                                          <GetName url={item[value]} name={value}/>
                                                        ) 
                                                        :(item[value])
                                                    }</>
                                                    
                                            }
                                        </td>
                                    ))
                                    }
                                    <div onClick={()=>handleDropdown(index)}>
                                    <td className={styles.dropdown} ><BiDotsVerticalRounded size={22} /></td>
                                    </div>
                                    {
                                        value === index && open && (
                                        <div className={styles.dropdown_pos}>
                                        <Option toggle={open} action={handleDropdown}/>
                                        </div>
                                        )

                                    }
                                </tr>
                                
                                </>
                            ))
                        }
                    </tbody>
                </table>
            }
            <div>
                {toggle && <Details detail={[detail]} action={handleListClick} name={name} />}
            </div>
        </div>
    )
}
