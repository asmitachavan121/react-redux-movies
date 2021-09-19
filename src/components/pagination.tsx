import * as React from 'react';
import { Component } from 'react';
import _ from 'lodash';
interface PaginationProps {
    totalItems: number,
    pageSize: number,
    currentPage: number,
    onPageChange: (page: number) => void;
}
const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
    
    const pageCount = Math.ceil(props.totalItems / props.pageSize);
    const pages = _.range(0, pageCount);
    if(pageCount < 1) {
        return null;
    }
    console.log(props.currentPage);
    return (
        <nav aria-label="Page navigation example">
        <ul className="pagination">
            {pages.map(page => {
                return (
                    <li key={page} className={props.currentPage === page? "page-item active": "page-item"}>
                        <a className="page-link" onClick={() => props.onPageChange(page)}>{page+1}</a>
                    </li>
                )
            })}
        </ul>
        </nav>
    );
}
 
export default Pagination;
const str = `${'abc'}`