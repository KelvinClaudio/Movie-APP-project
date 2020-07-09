import * as ACTIONS from "./actions";

const initialState = {
   search: "",
   totalRes: "",
   curPage: 1,
   movies: [],
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case ACTIONS.SEARCH:
         return {
            ...state,
            totalRes: action.payload.totalRes,
            search: action.payload.search,
            movies: action.payload.movies,
         };
      case ACTIONS.NEXTPAGE:
         return {
            ...state,
            curPage: state.curPage + 1,
         };
      case ACTIONS.PREVPAGE:
         return {
            ...state,
            curPage: state.curPage - 1,
         };
      case ACTIONS.NEWPAGE:
         return {
            ...state,
            movies: action.payload.movies,
         };
      default:
         return state;
   }
};
export default reducer;
