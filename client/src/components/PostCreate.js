import React from 'react';
import { 
    Create, 
    SimpleForm, 
    TextInput, 
    DateInput } from 'react-admin'; //Create : wrapper element


// 글생성
// id는 자동 생성됨 
const PostCreate = (props) => {
  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
        <TextInput source='title' />
        <TextInput multiline source='body' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
