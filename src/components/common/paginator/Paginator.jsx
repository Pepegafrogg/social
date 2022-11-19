import React, { useState } from 'react'
import classes from './Paginator.module.css';

const Paginator = (props) => {
   const pagesCount = Math.ceil(props.totalCount / props.pageSize)
   const pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }
   const portionCount = Math.ceil(pagesCount / props.portionSize)
   const [portionNumber, setPortionNumber] = useState(1);
   const leftPortionPageNumber = (portionNumber - 1) * props.portionSize
   const rightPortionPageNumber = portionNumber * props.portionSize


   return (
      <div className={classes.usersNav}>
         {portionNumber > 1 && <button className={classes.btnLeft} onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}
         {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
               return (
                  <span key={p} className={props.currentPage === p
                     ? classes.selectedPage
                     : classes.otherPage
                  }
                     onClick={(e) => props.changePage(p)}
                  >
                     {p}
                  </span>
               )
            })}
         {portionCount > portionNumber && <button className={classes.btnRight} onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
      </div>
   )
}
export default Paginator
