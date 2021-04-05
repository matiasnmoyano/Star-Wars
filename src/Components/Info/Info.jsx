import React from 'react';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import './Info.css'
export default function Info (){
    let { id } = useParams();
    let pjs= JSON.parse(localStorage.getItem('pjs'));
    let history = useHistory();
    const back = function (){
        history.push(`/`);
    }
    return (
        <div className='background' >
            <button type="button" class="btn btn-warning text" onClick={back}>Back</button>
            <div class="card info">
                <div class="card-header title3">
                  {pjs[id-1].name} 
                </div>
                <div class="card-body body">
                    <blockquote class="blockquote mb-0">
                        <p>Birth year: {pjs[id-1].birth_year}</p>
                        <p>Height: {pjs[id-1].height}</p>
                        <p>Gender: {pjs[id-1].gender}</p>
                        <p>Eye color: {pjs[id-1].eye_color}</p>
                        <p>Hair color: {pjs[id-1].hair_color}</p>
                        <p>Skin color: {pjs[id-1].skin_color}</p>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}
