import React from 'react';
import { Formik,Form} from 'formik';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fieldes from './Fieldes';
import * as Yup from './yup';

export default function LoginForm() {
  return (
        <Formik
          initialValues={{
                    email:'',
                    password:''
          }}
        >
                  {formik => (
                            <div className="login">
                               <div className='text-white text-center pt-5'>خوش آمدید</div>
                              <Form className='py-5'>
                               <Fieldes placeholder="پست الکترونیک" name="email" type="email"/>
                               <Fieldes placeholder="کلمه عبور"  name="password" type="password"/>
                               <a href="#" className='text-success d-block py-5 text-decoration-none'>فراموش کردید؟</a>
                    
                               <Button variant="success" className="byn-lg w-100" type="submit">
                                ورود
                               </Button>
                             </Form>

                            </div>
                  )}
       </Formik>
  )
}
