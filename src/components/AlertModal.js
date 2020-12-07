import React from 'react';
import { Alert } from '../styles/Alert';
import { useHistory } from 'react-router-dom';

export default function AlertModal({ alertProps, setAlert }) {
  const { color, message } = alertProps;
  const history = useHistory();
  return (
    <Alert color={color} onClick={() => setAlert(false)}>
      {color === '#2dbe60' ? (
        <span onClick={() => history.push('/blockone')}>view&#10095;</span>
      ) : (
        ''
      )}
      {message}
    </Alert>
  );
}
