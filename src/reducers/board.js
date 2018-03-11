import * as types from '../actions/constants/';

const initialState = {
  board: []
}

const boardReducer = (state = initialState.board, action) => {
  switch (action.type) {
    case types.PREFILL_BOARD:
    case types.TOGGLE_CELL:
    case types.CREATE_NEXT_GEN:
      return [...action.board];
    default:
      return state;
  }
};

export default boardReducer;