import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditPostForm(props){
  const { post } = props;

  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditPost({title: event.target.title.value, description: event.target.description.value, id: post.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditPostFormSubmission} /* new code */ 
        buttonText="Update Post" />
    </React.Fragment>
  );
}

EditPostForm.propTypes = {
  onEditPost: PropTypes.func
};

export default EditPostForm;