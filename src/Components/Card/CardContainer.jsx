import React, { useState, useEffect } from 'react';
import './CardContainer.css'
import Card from './Card.jsx'
import Axios from 'axios'
export default function CardContainer (){
    const url = [
        'https://64.media.tumblr.com/a799a60d7cfa4eb9bdd3e260011373ac/7c00e985e0e6a1a4-45/s1280x1920/8b223fcf535c6dd60fff2249328f78d719840277.png' ,
        'https://i.pinimg.com/564x/a3/46/20/a34620260d6019c9a620691189e523cd.jpg',
        'https://i.pinimg.com/564x/48/ad/55/48ad55c616bce1fd8d5f4dd4d4a084e7.jpg',
        'https://i.pinimg.com/564x/96/a4/6c/96a46c561e4292ff3861197ac4a1c881.jpg',
        'https://i.pinimg.com/564x/60/4f/71/604f71ac5d4767d5dc3e71c8c6fb2263.jpg',
        'https://i.pinimg.com/564x/96/d1/20/96d120629c018fb90ad14e6021dfcbb1.jpg',
        'https://i.pinimg.com/564x/3d/2a/de/3d2ade1e4109f22a108db1bfb547102e.jpg',
        'https://i.pinimg.com/564x/56/93/3f/56933fd1c191519788dd0a0873d1970e.jpg',
        'https://i.pinimg.com/564x/9b/92/33/9b923314c987ac617e43898acfa9e4db.jpg',
        'https://i.pinimg.com/564x/73/61/bf/7361bf0a35f6e5a8fbddea6be65452b4.jpg',
    ]
    let [pjs, setPjs] = useState([]);    
    const pers = () =>{
        Axios.get('https://swapi.dev/api/people/')
        .then((data) =>{
            data.data.results.map((pj) =>{
                pjs.push(pj)
            })  
        })
        .then(() =>{
            localStorage.setItem('pjs', JSON.stringify(pjs)) 
        })
        .catch((err) =>{
            console.log(err)
        })
    }
useEffect(() => {
        pers()
  },[]);
    return (
        <div className='row row-cols-1 row-cols-md-3 g-3 container'>
            {
                url.map((urls,i)=>{
                    return (
                        <Card url={urls} id={i++}></Card>  
                    )
                })
            } 
        </div>
    )
}