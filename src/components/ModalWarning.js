import React from 'react';
import Aux from '../hoc/';
import AddIcon from '../static/images/add.svg';
import PlayIcon from '../static/images/play-button.svg';

export default function ModalWarning(props) {
  console.log('POPPPP', props)
  return (
    <Aux>
      <div className="modal__container">
        <h1 className="modal__title">
        You must have 18 + before ENTER
        </h1>
        <button className="modal__btn modal__btn--red" onClick={() => props.action()}>
          <PlayIcon className="modal__btn--icon" />
          ENTER
        </button>
        <button className="modal__btn" onClick={() => window.location = 'http://google.com'} >
          <AddIcon className="modal__btn--icon"/>
          NO
        </button>
      </div>
    </Aux>
  );
}