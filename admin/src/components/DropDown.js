import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'

const DropDown = ({list, setList, title}) => {
    return (
        <div>
               <Form.Group >
               <Form.Label>{title}</Form.Label>
               <Form.Control as="select" onChange={(e)=>setList(e.target.value)}>
                    {list.map((loc,i)=>{
                            return <option key={i}>{loc}</option>
                    })}
               
                </Form.Control>
              </Form.Group>
            
        </div>
    );
};

export default DropDown;