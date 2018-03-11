import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;  
  border: 1px solid  ${({ theme }) => (theme.darks.secondary || '#273f4f')};
  background: ${({ isAlive, theme }) => 
    isAlive 
      ? (theme.darks.orange || '#d86208') 
      : (theme.darks.primary || '#040911')}  
  &: hover {
    opacity: 0.5;
  }    
`;

const Cell = ({ isAlive, row, col, onClick }) => { 
  return (
    <Wrapper isAlive={isAlive} onClick={() => onClick(row, col)} />
  )
}

Cell.propTypes = {
  isAlive: PropTypes.bool.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

export default Cell;