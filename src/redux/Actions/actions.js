import * as types from "./actionTypes";
export const addData = data => ({
  type: types.ADD_DATA,
  payload: data,
});
export const dell = del => ({
  type: types.DELL,
  payload: del,
});
export const edi = ed => ({
  type: types.EDI,
  payload: ed,
});
