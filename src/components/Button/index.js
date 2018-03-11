import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.button`
  cursor: pointer;
  width: 120px;
  height: 25px;
  text-align: center;
  background: ${({ theme }) => (theme.darks.primary || '#040911')};
  color: ${({ theme }) => (theme.darks.color || '#a5aad1')};
  border: none;
  outline: none;
  &: hover {
    border: 1.5px solid ${({ theme }) => (theme.darks.orange || '#d86208')};
  }
`;

const Button = ({ onClick, children }) => { 
  return (
    <Wrapper onClick={onClick}>
      {children}
    </Wrapper>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

export default Button;