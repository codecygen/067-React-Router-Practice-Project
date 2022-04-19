import { useState, useEffect, useCallback } from 'react';

// React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
import { useParams } from 'react-router-dom';

import classes from './Comments.module.css';

// React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
import NewCommentForm from './NewCommentForm';

// React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
import useHttp from '../../hooks/use-http';

// React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../ui/LoadingSpinner';
import CommentsList from './CommentsList';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  // React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
  const params = useParams();

  const { quoteId } = params;

  // React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  // React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  // React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
  // Here we wrapped the function with useCallback to prevent it to be
  // re-rendered as this function is used in useEffect function in NewCommentForm
  // component.
  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let comments;

  if (status === 'pending') {
    comments = (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'completed' && (loadedComments && loadedComments.length > 0)) {
    comments = (
      <CommentsList comments={loadedComments} />
    );
  }

  if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    comments = (
      <p className='centered'>
        No comments were added yet!
      </p>
    );
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {/* React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database */}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
