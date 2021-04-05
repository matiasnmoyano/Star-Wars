import React from 'react';
import './Container.css'
import Banner from './Banner/Banner.jsx'
import CardContainer from './Card/CardContainer.jsx'
export default function Container(){
    
    return (
        <div>
            <Banner></Banner> 
            <img src='https://i.pinimg.com/564x/15/ae/fd/15aefdd7b1c4fe906ba5d94f817c99a4.jpg'  className='title' ></img> 
            <CardContainer></CardContainer>
        </div>
    )
}