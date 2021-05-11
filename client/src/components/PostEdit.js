import React from 'react';
import { 
    Edit, 
    SimpleForm, 
    TextInput, 
    DateInput } from 'react-admin'; //Edit : wrapper element

const PostEdit = (props) => {
  return (
    <Edit title='Edit a Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
    {/* disabled : 사용자들이 바꾸지 못하게 readonly로 */}
        <TextInput source='title' />
        <TextInput multiline source='body' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
