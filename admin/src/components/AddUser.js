import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DropDown from '../components/DropDown'

const AddUser = ({onRouteChange}) => {
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [cellNumber, setCellNumber] = useState('')
const [hireDate, setHireDate] = useState('')
const [workPreference, setWorkPreference] = useState('')
const [workStatus, setWorkStatus] = useState('Active')
const [shiftPreference, setShiftPreference] = useState('Day')
const [employeeTitle, setEmployeeTitle] = useState('RN')

const employeeTitleList = ['RN', 'Manager', 'HCA', 'LPN', 'Scheduler', 'Janitor', 'Admin']
const workPreferenceList = ['Full Time', 'PartTime', 'Casual', 'Intern']
const ShiftPreferenceList = ['Day','evening', 'Night', 'Rotation', 'Flexible']
const onAddUser = (firstName, lastName, email, password, cellNumber, hireDate, workPreference, workStatus)=>{

  console.log({firstName, lastName, email, password, cellNumber, hireDate, workPreference, workStatus})
  alert(`${firstName} ${lastName} added `)
  onRouteChange('clientList')

}
    return (
        <div>
            <div> Add Users Screen</div>
            <Form>              
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Firstname" onChange={(e)=>setFirstName(e.target.value)}/>
              </Form.Group>

              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Lastname" onChange={(e)=>setLastName(e.target.value)}/>
              </Form.Group>

              <Form.Group controlId="formUserEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formUserPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
              </Form.Group>

              <Form.Group controlId="formCellNumber">
                <Form.Label>Cell Number</Form.Label>
                <Form.Control type="phone" placeholder="403-123-4567" onChange={(e)=>setCellNumber(e.target.value)}/>
              </Form.Group>

              <Form.Group controlId="formHireDate">
                <Form.Label>Hire Date</Form.Label>
                <Form.Control type="date" placeholder='Date' onChange={(e)=>setHireDate(e.target.value)}/>
              </Form.Group>

              <Form.Group controlId="jobTitle">                
                <DropDown setList={setEmployeeTitle} list={employeeTitleList} title='Job Title' />
              </Form.Group>

              <Form.Group controlId="workPreferenceSelect1">                
                <DropDown setList={setWorkPreference} list={workPreferenceList} title='Work Preference' />
              </Form.Group>

              <Form.Group controlId="Shift Preference">
              <DropDown setList={setShiftPreference} list={ShiftPreferenceList} title='Shift Preference' />
              </Form.Group>

              <Form.Group controlId="workStatus">
                <Form.Label>Work Status</Form.Label>
                <Form.Control as="select" onChange={(e)=>setWorkStatus(e.target.value)}>
                  <option>Active</option>
                  <option>Vacation</option>
                  <option>Suspended</option>
                  <option>Terminated</option>
                  </Form.Control>
              </Form.Group>



              {/* <Form.Group controlId="formUserCheckboxUser">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              <Button variant="primary" type="submit" onClick={()=>onAddUser(firstName, lastName, email, password, cellNumber, hireDate, workPreference, workStatus)}>
                Add User
              </Button>
</Form>
            
        </div>
    );
};

export default AddUser;