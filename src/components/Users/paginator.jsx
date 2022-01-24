import React, {useState} from "react";
import cmedia from './usersC.module.css';
import cn from "classnames";

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;
    console.log(props.portionSize);
    return (

        <div className={cmedia.paginator}>
            {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
            {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map((page) => {
                    return (<span onClick={(e) => { props.onPageChanged(page); }} className={cn({[cmedia.selectedPage]: props.currentPage===page},cmedia.pageNumber)}>{page}</span>)
                })}
            {portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
            
        </div>
    
    )
}

export default Paginator;