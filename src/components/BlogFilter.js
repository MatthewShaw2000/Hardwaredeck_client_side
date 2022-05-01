//React Components
import React from 'react';
import { Link } from 'react-router-dom';

//CSS 
import '../css/style.css';

//font Awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';





export default function SortBy({setSortBy, user})
{
    return (
        <>
            <div className='listFilter'>
                <div className='leftColumn'>
                    <h3>Sort by</h3>
                    <select name='categories' id='categories' onChange={(event) => setSortBy(event.target.value)}>
                        <option value='ascend' defaultValue>Alphabetical (A-Z)</option>
                        <option value='descend'>Alphabetical (Z-A)</option>
                        <option value='newest'>Newset</option>
                        <option value='oldest'>Oldest</option>
                    </select>
                </div>

                {
                    user
                    ?
                    <div className='rightColumn'>
                        <h3>Add blog</h3>
                        <Link to={'/blogs/add_blog'} className='button'><FontAwesomeIcon icon={faPlus} /></Link>
                        
                    </div>
                    :
                    null
                }
            </div>
        </>
    );
}