import React from 'react';
import styles from './Data.module.css'
import { useState, useEffect } from 'react';
import { BiGridSmall, BiListUl } from "react-icons/bi";
import { Triangle } from 'react-loader-spinner';
import axios from 'axios';
import Grid from './Grid List View/Grid';
import { List } from './Grid List View/List';


function Data(props) {
    const [movie, setMovies] = useState([]);
    const [toggle , setToggle ] = useState(false);
    const [loading , isloading] = useState(true);

    const API = `https://swapi.dev/api/${props.value}`;

    const getData = async (url) => {
        const res = await axios.get(url);
        const data = await res.data.results;
        setMovies(data);
        isloading(false)

    };

    useEffect(() => {
        getData(API);
    },[])

    const handleList = (()=>{
        setToggle(!toggle);
    });
    const handleGrid = (()=>{
        setToggle(!toggle);
    })

    const name=props.value;

    // console.log(Object.keys(movie[0]))
    // const obj = Object.keys(movie[0])
    
    return (
        <div className={styles.section}>
            <div className={styles.list_grid}>
                <h3 className={styles.heading}>{props.value}</h3>
                <div className={styles.btn_item}>
                    {/* <button className={styles.btn} onClick={handleList}><BiListUl style={{ fontSize: '1.3rem' }} />list</button>
                    <button className={styles.btn} onClick={handleGrid}><BiGridSmall style={{ fontSize: '1.3rem' }}  />grid</button> */}

                    <div className={styles.switch_btn}>
                        <input type="checkbox" name='checkbox' id='toggle'></input>
                        <label for="toggle" className={styles.switch}>list</label>
                    </div>
                </div>
                {/* {obj.toString()} */}
            </div>
            {loading ? (
                <div className={styles.triangle}>
            <Triangle
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName={styles.riangle}
  visible={true}
/>
</div>):(
            <div className='movie'>
                <div >
                    {
                        name==='films'?(
                            toggle? (<List data={movie} name={name}/>):(<Grid data={movie} name={name}/>) )
                            :
                            (
                                toggle? (<Grid data={movie} name={name}/>):(<List data={movie} name={name}/>)
                            )
                            
                    }
                </div>
            </div>

)}        
        </div>
    )
}

export default Data