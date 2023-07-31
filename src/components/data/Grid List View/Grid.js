import React, { useState,useRef, useEffect } from 'react'
import styles from './Grid.module.css'
import { PiFilmReelBold } from "react-icons/pi";
import { FaEllipsisV } from "react-icons/fa";
import onClickOutside from "react-onclickoutside";
// import Option from '../Modal/Option';
import Details from '../Modal/Details';
import Option from '../Modal/Option';


const Grid = ({ data,name }) => {
    const [toggle,setToggle ] = useState(false);
    const [open , setOpen] = useState(null)

    const handleClick= (index)=>{
        setOpen(index);
        setToggle(!toggle);
    }

    const [show, setShow] = useState(false);
    const [detail , setdata] = useState('');
    

    const handleImageclick = (item)=>{
        setdata(item);
        
        setShow(!show);
    }
    Grid.handleClickOutside = () => {
        setToggle(!toggle);
      };

    
    return (
        // <div>
        //     {
        //         data.map((item, index) =>(
        //             <>
        //             <p style={{border:"1px solid black"}}>{item.title}</p>
        //             <p>{item.director}</p>
        //             <p>this grid component</p>
        //             </>

        //         ))
        //     }
        // </div>
        
        <div className={styles.cards}>
            {
                data.map((item, index) => (

                    <div className={styles.card} key={index}>
                        <div className={styles.image} onClick={()=>handleImageclick(item)}></div>
                        <div className={styles.content}>
                            <div>
                                <span className={styles.icon}>
                                    <PiFilmReelBold size={22} color="white" style={{ top: "0px" }} />
                                </span>
                                
                                <span className={styles.title}>{
                                name==='films'?item.title: item.name
                                }</span>
                            </div>
                            <div className={styles.dropdown} onClick={()=>handleClick(index)}>
                                <div >
                                <FaEllipsisV color='white'/>  
                                    {
                                        open ===index && toggle &&(<Option  toggle={toggle} action={handleClick}/>)
                                    }
                                
                                </div>
                            </div>
                        </div>
                        
                    </div>

                ))
                            }

                            
             
            {

            show ?(<Details detail={[detail]} action={handleImageclick} name={name}/>):('')
            }
        </div>
    )
}
const clickOutsideConfig = {
    handleClickOutside: () => Grid.handleClickOutside,
  };

export default Grid