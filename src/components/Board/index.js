import React from 'react';
import styled from 'styled-components';
import uuidv4 from 'uuid';
import PropTypes from 'prop-types';

import Cell from '../Cell';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Board = ({ board, handleCellClick }) => {
  const renderCells = () => {
    return board.map((row, i) => {
      return row.map((cell, j) => {
        return <Cell
          key={uuidv4()}
          isAlive={!!cell}
          row={i}
          col={j}
          onClick={handleCellClick}
        />;
      });
    });
  }
  
  return (
    <Wrapper>{renderCells()}</Wrapper>
  )
}

Board.propTypes = {
  board: PropTypes.array.isRequired,
  handleCellClick: PropTypes.func
};

export default Board;