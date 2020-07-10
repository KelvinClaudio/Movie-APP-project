import axios from "axios";
//
export const SEARCH = "SEARCH";
export const NEXTPAGE = "NEXTPAGE";
export const PREVPAGE = "PREVPAGE";
export const NEWPAGE = "NEWPAGE";
export const LOADING = "LOADING";
//
export const KEY = "6ac2333d";

// fungsi ini untuk melakukan pencarian
export const searchMovies = search => async (dispatch, getState) => {
   try {
      // reset state
      dispatch({
         type: SEARCH,
         payload: {
            search: "",
            totalRes: "",
            movies: [],
         },
      });
      // dispatch loading untuk mengetahui apakah sedang loading atau tidak
      dispatch({ type: LOADING, payload: { loading: true } });
      const response = await axios(
         `http://www.omdbapi.com/?s=${search}&apikey=${KEY}&page=1`
      );
      if (response) dispatch({ type: LOADING, payload: { loading: false } });
      dispatch({
         type: SEARCH,
         payload: {
            search: search,
            totalRes: response.data.totalResults,
            movies: response.data.Search,
         },
      });
   } catch (error) {
      console.log(error);
   }
};
// untuk pindah halaman
export const prev = () => async (dispatch, getState) => {
   try {
      dispatch({ type: PREVPAGE });
      const current = getState().curPage;
      const search = getState().search;
      const response = await axios(
         `http://www.omdbapi.com/?s=${search}&apikey=${KEY}&page=${current}`
      );
      dispatch({
         type: NEWPAGE,
         payload: {
            movies: response.data.Search,
         },
      });
   } catch (error) {
      console.log(error);
   }
};
// untuk pindah halaman
export const next = () => async (dispatch, getState) => {
   try {
      dispatch({ type: NEXTPAGE });
      const current = getState().curPage;
      const search = getState().search;
      const response = await axios(
         `http://www.omdbapi.com/?s=${search}&apikey=${KEY}&page=${current}`
      );
      dispatch({
         type: NEWPAGE,
         payload: {
            movies: response.data.Search,
         },
      });
   } catch (error) {
      console.log(error);
   }
};
