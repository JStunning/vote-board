import React from "react";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewPostForm(props){

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      title: event.target.title.value,
      description: event.target.description.value,
      id: v4()
    });
  }
  
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewPostFormSubmission}
        buttonText="Add Post" />
    </React.Fragment>
  );
}

export default NewPostForm;