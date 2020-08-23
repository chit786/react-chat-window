import React from 'react';
import Linkify from 'react-linkify';

const ButtonGroupMessages = (props) => {
  return( <div className="sc-message--div-button-group">
    { props.data.messages.map(function(message, index){
      return <p key={index}>
        <button className="sc-message--button-group" key={index} onClick={() => message.callback(index)}> 
          <Linkify properties={{ target: '_blank' }}>{message.text}</Linkify>
        </button>
      </p>;
    }, this)
    }
  </div>);
};

export default ButtonGroupMessages;
