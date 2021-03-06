import './style.css'
import React ,{useContext}from 'react';
import { Link } from 'react-router-dom';
import {MokaContext} from '../../Context/MokaContext';


const Navbars = () => {
  const Data = useContext(MokaContext);
  const {value,handleChange}=Data
    return (
        <nav className="nav">
            <h3 className="logo"> MO<span>K</span>A</h3>
        <ul>
     <li>
       <Link to="/">Home</Link>
     </li>
     <li>
       <Link to="/favorit"> My Favoirt </Link>
     </li>
     <input type="text" className="input-search" placeholder="Enter any type of food" 
                  name='name'
                   id='name' 
                   value={value}
                    onChange={handleChange}/>
   </ul>   
   </nav>
    );
}

export default Navbars;
