import React from 'react';
import { 
    Edit, 
    SimpleForm, 
    TextInput, 
   } from 'react-admin'; //Edit : wrapper element

const UserEdit = (props) => {
  return (
    <Edit title='Edit a User' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
    {/* disabled : 사용자들이 바꾸지 못하게 readonly로 */}
        <TextInput source='name' />
        <TextInput source='email' />
  
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
