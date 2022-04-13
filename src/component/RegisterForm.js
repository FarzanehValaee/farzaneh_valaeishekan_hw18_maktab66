import React,{useState,useEffect} from 'react';
import { Formik } from 'formik';
import {Form,Button} from 'react-bootstrap';
import FetchData from './FetchData';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RegisterForm() {
          const [data, setData] = useState([])
          useEffect(() => {
                    fetch('../public/JSON/iranstates.json')
                    .then((data) => data.json())
                    .then((res)=> setData(res))
                    
            },[])
            
  return (
            <>
            </>
  )
}
