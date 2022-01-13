import * as types from "../Actions/actionTypes";

const initialState = {
  user: [],
  del: [],
  editEmpdata: [],
};

const ReducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_DATA:
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    case types.DELL:
      let arr = [...state.user];
      let a = arr.filter((val, i) => {
        if (val.designation == action.payload.designation) {
          arr.splice(i, 1);
        }
      });
      return {
        ...state,
        user: arr,
      };
    case types.EDI:
      let arr1 = [...state.user];
      let b = arr1.filter((val, i) => {
        if (val.designation == action.payload.designation) {
          arr.slice(i, 1);
        }
      });
      return {
        ...state,
        editEmpdata: arr1,
      };

    default:
      return state;
  }
};

export default ReducerFunction;
