import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Locations = ({setLocation, locationList}) => {




    return (
        <div>
            <Form>
            <Form.Group controlId="locationList">
                <Form.Label>Location</Form.Label>
                <Form.Control as="select" onChange={(e)=>setLocation(e.target.value)}>
                    {locationList.map((loc,i)=>{
                            return <option key={i}>{loc}</option>
                    })}
               
                </Form.Control>
              </Form.Group>
            </Form>            
        </div>
    );
};

export default Locations;