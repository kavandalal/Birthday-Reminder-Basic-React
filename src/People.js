import React from 'react';
import {data} from './data/data.js';
import './People.css'
export var ctr=data.length;
const People = () => {
    const [people,setPeople] = React.useState(data);
    return(
        <section>
            {people.map((person) => {
                return <Person key={person.id} {...person}> </Person>
            })}
        <button type='button' className='btn' onClick={ () => setPeople([]) }>Clear</button>
        <button className='btn' onClick={() =>{
      window.location.reload();
      }}>
      Refresh
    </button>
        </section>
    );
}

const Person = (props) => {
    {ctr=ctr+1}
    return(
        <div className="individual">
            <div style={{'text-align':'right'}}>
                <img src ={props.img} />
            </div>
            <div style={{'text-align':'left'}}>
                <p className='name'>{props.name}</p>
                <p className="age">{props.age}</p>
            </div>
        </div>
    );
}
export default People;