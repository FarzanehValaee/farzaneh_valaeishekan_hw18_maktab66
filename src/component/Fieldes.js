import React from 'react';
import {useField} from 'formik';
import {Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Fieldes(placeholder,...props) {
          const [field,meta]=useField(props)

  return (
          <Form.Group className="mb-3 py-2" controlId={field.name}>
           <Form.Control type={field.type} placeholder={field.placeholder} />
          </Form.Group>
  )
}
