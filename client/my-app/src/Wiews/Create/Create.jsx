import React, { useEffect } from 'react'
import Form from '../../Components/Form/Form';
import styles from "./Create.module.css";
import { useDispatch } from 'react-redux';
import { clearForm } from '../../Redux/Actions';


function Create() {
  const dispach=useDispatch();
  useEffect(()=>{
    dispach(clearForm())
  },[dispach])
  return (
    <div className={styles.container} >
      <div >  
      <Form/>
      </div>
    </div>
  )
}

export default Create;