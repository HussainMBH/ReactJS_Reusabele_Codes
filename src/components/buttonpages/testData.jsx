import React from 'react';
import UseProps from './UseProps';

function TestData() {
  const userData = {
    name: "Bahir",
    age: 24,
    contactNumber: "0768816878",
    mail: "mbahirh624@gmail.com"
  };

  return (
    <div>
      <h1>This is Testing Data</h1>
      <UseProps 
        name={userData.name}
        age={userData.age}
        phonenumber={userData.contactNumber}
        mail={userData.mail} 
      />
    </div>
  );
}

export default TestData;
