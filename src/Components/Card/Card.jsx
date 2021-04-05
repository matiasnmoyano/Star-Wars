import React from "react";
import { useHistory } from "react-router-dom";
import './Card.css'
export default function Card ({url,id}){

    let history = useHistory();
    const onClick = () => {
        history.push(`/info/${id+1}`);
    }
    
    return (
      <div >
       <img onClick={onClick} src={url} class="card-img rounded-circle img" />
     </div>
    )
}
