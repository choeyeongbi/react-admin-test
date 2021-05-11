import React from 'react';
import { 
    Create, 
    SimpleForm, 
    TextInput
} from 'react-admin'; //Create : wrapper element


// 글생성
// id는 자동 생성됨 
const UserCreate = (props) => {
  return (
    <Create title='Create a user' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='email' />
      
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
