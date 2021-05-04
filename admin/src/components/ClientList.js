import React from 'react';
import Table from 'react-bootstrap/Table'

const ClientList = () => {

    const title = ['UserId', 'FirstName', 'LastName', 'Department', 'EmployementType']
    const dataTable =[{UserId:1, FirstName: 'Peter', LastName: 'Jones', Department: 'Nursing' , EmployementType: 'Full Time'},
                    {UserId:2, FirstName: 'Ola', LastName: 'Smith', Department: 'RN' , EmployementType: 'Casual'},
                    {UserId:4, FirstName: 'Ade', LastName: 'Wale', Department: 'Engineer' , EmployementType: 'Vacation'},
                    {UserId:5, FirstName: 'Lolu', LastName: 'Wale', Department: 'Manager' , EmployementType: 'Full Time'}]

                            
    return (
        <div >
            
           
          
            <Table responsive='lg'>
  <thead>
    <tr>
     
      {title.map((data, index) => (
        <th key={index}>{data}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    
     
      {dataTable.map((data, index) => {
        return (<tr key={index}>
                 <td >{data.UserId}</td>
                <td >{data.FirstName}</td>
                <td >{data.LastName}</td>
                <td >{data.Department}</td>
                <td >{data.EmployementType}</td>
        </tr>
      )})}
    
 
  </tbody>
</Table>
            
        </div>
    );
};

export default ClientList;