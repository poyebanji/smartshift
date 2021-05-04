import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const Signin = ({setIsSignedIn, onRouteChange}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitSignin =(email, password)=>{
          console.log({email, password})
          setIsSignedIn(true)
          onRouteChange('clientList')
    }

    return (
<Form>
  <Form.Group controlId="formSigninEmail">
    <Form.Label className='mt-3'>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formSigninPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
    <Form.Text className="text-muted">
      Never share your password with anyone else.
    </Form.Text>
  </Form.Group>

  <Button variant="primary" type="submit" onClick={()=>onSubmitSignin(email, password)}>
    Signin
  </Button>
</Form>
    );
};

export default Signin;