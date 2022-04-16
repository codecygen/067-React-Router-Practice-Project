// React-Router-Prevent-User-to-Lose-Entered-Data-By-Changing-Page
import { useRef, useState } from 'react';

// Aras-aras_asda

// React-Router-Prevent-User-to-Lose-Entered-Data-By-Changing-Page
import { Prompt } from 'react-router-dom';

import Card from '../ui/Card';
import LoadingSpinner from '../ui/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  // React-Router-Prevent-User-to-Lose-Entered-Data-By-Changing-Page
  const [isEntering, setIsEntering] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  // React-Router-Prevent-User-to-Lose-Entered-Data-By-Changing-Page
  // This section prevents page to be accidentally block sending data
  // when the button is pressed
  const finishEnteringHandler = () => {
    // Setting this inside form submit handler it will not work because
    // it will be too late. That's why a different function is used here.
    setIsEntering(false);
  };

  // React-Router-Prevent-User-to-Lose-Entered-Data-By-Changing-Page
  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <>
      {/* React-Router-Prevent-User-to-Lose-Entered-Data-By-Changing-Page */}
      <Prompt
        when={isEntering}
        message={location =>
          'Are you sure you want to leave? All your entered data will be lost!'
        }
      />

      <Card>
        {/* React-Router-Prevent-User-to-Lose-Entered-Data-By-Changing-Page */}
        {/* Here formFocusedHandler triggers the Prompt hook to be activated if */}
        {/* use tries to leave the page after working on the form */}
        <form onFocus={formFocusedHandler} className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            {/* React-Router-Prevent-User-to-Lose-Entered-Data-By-Changing-Page */}
            {/* This section prevents page to be accidentally block sending data */}
            {/* when the button is pressed, so onClick prop used here. */}
            <button onClick={finishEnteringHandler} className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
