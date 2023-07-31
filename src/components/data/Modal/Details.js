import React from 'react'
import styles from './Details.module.css';
import { AiOutlineClose } from "react-icons/ai";

const Details = ({detail,action,name}) => {

    const state = action;
    
    // const film = ['title','opening_crawl','director'];
    // const people = ['name','birth_year','gender'];
    // const planets = ['name','climate','population'];

    const obj={
        films:['title','opening_crawl','director'],
        people:['name','birth_year','gender'],
        planets:['name','climate','population'],
        starships:['name','passengers','cargo_capacity'],
        vehicles:['name','model']
    }

    const arry =  obj[name]||[];
    console.log(name);
    
    
    


  return (
    <section className={styles.details}>
        <div className={styles.container}>
                <div className={styles.heading}>
                    <h2 style={{textTransform:"capitalize"}}>{name}</h2>
                    <AiOutlineClose size={28} style={{color:'#f0ffff'}} className={styles.icon} onClick={state}/>
                </div>
                <div>
                <div className={styles.image}>
                    <h4 className={styles.cnt_heading}>Image</h4>
                    <div className={styles.image_img}>
                    <img src='https://picsum.photos/seed/picsum/400/200'></img>
                    </div>
                </div>
                <div className={styles.content}>
                    {
                        detail.map((item,index)=>(
                            <div>
                                {
                                    arry.map((data,n)=>{
                                        return(
                                            <>
                                            <h4 className={styles.cnt_heading}>{data}</h4>

                                            <p className={styles.para}>{item[data]}</p>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            
                        ))
                    }
                    

                </div>
                </div>
        </div>
    </section>
  )
}

export default Details