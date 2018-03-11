import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
`;

const Header = ({ handlePlayClick, handleStopClick, handleClearClick }) => { 
  return (
    <Wrapper>
      <Button onClick={handlePlayClick}>Play</Button>
      <Button onClick={handleStopClick}>Stop</Button>
      <Button onClick={handleClearClick}>Clear</Button>
    </Wrapper>
  )
}

Header.propTypes = {
  handlePlayClick: PropTypes.func,
  handleStopClick: PropTypes.func,
  handleClearClick: PropTypes.func,
};


export default Header;