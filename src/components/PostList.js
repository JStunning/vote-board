import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props){
  console.log("postList ",props.postList);
  return (
    <React.Fragment>
      {/* {Object.values(props.postList).map((post) => {
        return  <Post
          whenPostClicked={props.onPostSelection} 
          title={post.title}
          description={post.description}
          id={post.id}
          key={post.id}
        />
      })} */}
    </React.Fragment>
  );
}


PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
};

export default PostList;