import React from 'react'
import styled from 'react-emotion'

function assignColor(props) {
  const color = props.reversed ? 
  props.active ? 'white' : '#aaa': 
  props.active ? 'black' : '#ccc';

  return color;
}

export const Button = styled('span')`
    cursor: pointer;
    color: ${assignColor};
`;
