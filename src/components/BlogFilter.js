//React Components
import React from 'react';

//CSS 
import '../css/style.css';





export default function SortBy({setSortBy})
{
    return (
        <>
            <div className='productFilter'>
                <div className='sortBy'>
                    <h3>Sort by</h3>
                    <select name='categories' id='categories' onChange={(event) => setSortBy(event.target.value)}>
                        <option value='ascend' defaultValue>Alphabetical (A-Z)</option>
                        <option value='descend'>Alphabetical (Z-A)</option>
                        <option value='newest'>Newset</option>
                        <option value='oldest'>Oldest</option>
                    </select>
                </div>
            </div>
        </>
    );
}