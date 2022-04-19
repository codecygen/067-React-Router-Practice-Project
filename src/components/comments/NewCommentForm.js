import { useRef, useEffect } from 'react';

// React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
import useHttp from '../../hooks/use-http';

// React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
import { addComment } from '../../lib/api';
import LoadingSpinner from '../ui/LoadingSpinner';

import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  // React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddedComment } = props;

  // React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    // React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
    const enteredText = commentTextRef.current.value;

    // React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
    sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {/* React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database */}
      { status === 'pending' && <div className="centered">
        <LoadingSpinner />
      </div> }
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
