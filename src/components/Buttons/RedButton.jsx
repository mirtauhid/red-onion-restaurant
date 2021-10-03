/* eslint-disable prettier/prettier */
import React from 'react';
import Button from 'react-bootstrap/Button';

const RedButton = ({ title, handleBtnClick }) => {
  return (
    <Button
      style={{
        minWidth: '100px',
        borderRadius: '18px',
        maxHeight: '36px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
        fontWeight: '500',
      }}
      onCLick={handleBtnClick}
      variant='danger'>
      {title}
    </Button>
  );
};

export default RedButton;
