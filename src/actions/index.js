import { cloneDeep } from 'lodash';

import * as types from './constants/';
import { generateMatrix, calculateNextBoard } from '../utils';

export const prefillBoard = (width, height, initial) => {
  const board = generateMatrix(width, height, initial);

  return {
    type: types.PREFILL_BOARD,
    board
  };
};

export const toggleCell = (prevBoard, row, col) => {
  const board = cloneDeep(prevBoard);
  board[row][col] = !board[row][col];

  return {
    type: types.TOGGLE_CELL,
    board
  };
};

export const createNextGen = (prevBoard, width, height) => {
  const board = calculateNextBoard(prevBoard, width, height);

  return {
    type: types.CREATE_NEXT_GEN,
    board
  };
};