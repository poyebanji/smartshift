import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CreateLocation = ({onRouteChange}) => {

    const [locationName, setLocationName] = useState('')
    const [locationAddress, setLocationAddress] = useState('')
    const [locationCity, setLocationCity] = useState('')
    const [locationPostalCode, setLocationPostalCode] = useState('')
    const [locationPhoneNumber, setLocationPhoneNumber] = useState('')

    const onCreateLocation = (locationName, locationPostalCode, locationAddress, locationPhoneNumber, locationCity)=>{

        console.log({locationName, locationPostalCode, locationAddress, locationPhoneNumber, locationCity})
        alert('Location Created')
        onRouteChange('clientList')
    }
    return (
        <div>
            <Form>
            <Form.Group controlId="createLocationName">
                <Form.Label>Location Name</Form.Label>
                <Form.Control type="text"placeholder="Enter Location Name" onChange={(e)=>setLocationName(e.target.value)}/>
              </Form.Group>

              <Form.Group controlId="createLocationAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text"placeholder="Enter Location Address" onChange={(e)=>setLocationAddress(e.target.value)}/>
              </Form.Group>

              <Form.Group controlId="createLocationPostalCode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control type="text"placeholder="Enter Location Postal Code" onChange={(e)=>setLocationPostalCode(e.target.value)}/>
              </Form.Group>

              <Form.Group controlId="createLocationCity">
                <Form.Label>City</Form.Label>
                <Form.Control type="text"placeholder="Enter Location City" onChange={(e)=>setLocationCity(e.target.value)}/>
              </Form.Group>

              <Form.Group controlId="createLocationPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text"placeholder="403-123-4567" onChange={(e)=>setLocationPhoneNumber(e.target.value)}/>
              </Form.Group>

              <Button variant="primary" type="submit" onClick={()=>onCreateLocation(locationName, locationPostalCode, locationAddress, locationPhoneNumber, locationCity)}>
                Create Location
              </Button>


              </Form>
        </div>
    );
};

export default CreateLocation;