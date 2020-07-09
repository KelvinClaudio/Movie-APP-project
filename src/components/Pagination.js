import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { next, prev } from "../redux/actions";

function Pagination() {
   const totalRes = useSelector(state => state.totalRes);
   const curPage = useSelector(state => state.curPage);
   const pages = Math.ceil(parseInt(totalRes) / 10);

   const dispatch = useDispatch();
   const nextPage = useCallback(() => dispatch(next()), [dispatch]);
   const prevPage = useCallback(() => dispatch(prev()), [dispatch]);

   return (
      <nav className="pag-nav">
         <ul className="pagination">
            <li
               className={`page-item ${curPage === 1 ? "disabled" : ""}`}
               onClick={curPage !== 1 ? prevPage : null}
            >
               <a className="page-link" href="#!" tabIndex="-1">
                  Previous
               </a>
            </li>
            <li
               className={`page-item ${curPage === pages ? "disabled" : ""}`}
               onClick={curPage !== pages ? nextPage : null}
            >
               <a className="page-link" href="#!">
                  Next
               </a>
            </li>
         </ul>
      </nav>
   );
}

export default Pagination;
