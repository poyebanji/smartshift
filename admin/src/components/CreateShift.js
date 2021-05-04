import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CreateShift = ({locationList, setLocation, location, onRouteChange}) => {
    const [managerName, setManagerName] = useState('')
    const [RNName, setRNName] = useState('')
    const [HCAName, setHCAName] = useState('')
    const [LPNName, setLPNName] = useState('')
    const [shiftDate, setShiftDate] = useState('')
    const [shiftType, setShiftType] = useState('')

    const onCreateShift = (managerName, RNName,  HCAName, LPNName, shiftDate, shiftType, location)=> {

    console.log({managerName, RNName, HCAName, LPNName, shiftDate, shiftType,location})

      alert(`shift added `)
      onRouteChange('clientList')
    }


    return (
        <div>
            <div>Create Shift</div>
            <Form>
            <Form.Group controlId="locationList">
                <Form.Label>Location</Form.Label>
                <Form.Control as="select" onChange={(e)=>setLocation(e.target.value)}>
                    {locationList.map((loc,i)=>{
                            return <option key={i}>{loc}</option>
                    })}               
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formShiftDate">
                <Form.Label>Shift Date</Form.Label>
                <Form.Control type="date" placeholder={Date()} onChange={(e)=>setShiftDate(e.target.value)}/>
              </Form.Group>

              <Form.Group controlId="shiftTypeSelect1">
                <Form.Label>Work Preference</Form.Label>
                <Form.Control as="select" onChange={(e)=>setShiftType(e.target.value)}>
                  <option>Select Shift</option>
                  <option>Morning</option>
                  <option>Evening</option>
                  <option>Night</option>
                </Form.Control>
              </Form.Group>
                         
              <Form.Group controlId="createMangerName">
                <Form.Label>Manager Name</Form.Label>
                <Form.Control type="text"placeholder="Enter ManagerName" onChange={(e)=>setManagerName(e.target.value)}/>
              </Form.Group>

              <Form.Group controlId="createRNName">
                <Form.Label>RN Name</Form.Label>
                <Form.Control type="text"placeholder="Enter RNName" onChange={(e)=>setRNName(e.target.value)}/>
              </Form.Group>

              <Form.Group controlId="createLPNName">
                <Form.Label>LPN Name</Form.Label>
                <Form.Control type="text"placeholder="Enter LPNName" onChange={(e)=>setLPNName(e.target.value)}/>
              </Form.Group>

              <Form.Group controlId="createHCAName">
                <Form.Label>HCA Name</Form.Label>
                <Form.Control type="text"placeholder="Enter HCAName" onChange={(e)=>setHCAName(e.target.value)}/>
              </Form.Group>

              <Button variant="primary" type="submit" onClick={()=>onCreateShift(managerName, RNName, HCAName, LPNName, shiftDate, shiftType, location)}>
                Create Shift
              </Button>
            </Form> 
        </div>
    );
};

export default CreateShift;