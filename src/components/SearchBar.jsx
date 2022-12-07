import { useState } from 'react';
import styles from './SearchBar.module.css'
import { NavLink} from 'react-router-dom'

export default function SearchBar(props) {

   const [character, setCharacter] = useState("")
   const HandleChange = (e) => {
      setCharacter(e.target.value)
   }
   return (
      <div>
         <input id='input' className={styles.input} type='number' onChange={HandleChange} placeholder='Ingresa un ID' />
      <button className={styles.button} onClick={()=> props.OnSearch(character)}>Agregar</button>
      <button className={styles.button} onClick={props.random}>Random</button>
      <NavLink to={'/Fav'} className={styles.button}><button className={styles.button} >Favoritos</button>
      </NavLink>
      </div>
      
   );
}
