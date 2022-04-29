//React Components
import React from 'react';

//Page Components
import Loader from '../components/Loader';

//CSS 
import '../css/style.css';





export default function ProductFilter({setSortBy, categories, setCategory})
{
    return (
        <>
            <div className='productFilter'>
                {
                    categories
                    &&
                    <div className='catFilter'>
                    <h3>Filter</h3>
                        <select name='categoriesFilter' id='categoriesFilter' onChange={(event) => setCategory(event.target.value)}>
                            <option value='All' defaultValue>All</option>
                            {
                                categories
                                ?
                                categories.map(category => {
                                    return <option key={category.name} value={category.name}>{category.name}</option>
                                })
                                :
                                <Loader/>
                            }
                        </select>
                    </div>
                }
                <div className='sortBy'>
                    <h3>Sort by</h3>
                    <select name='categories' id='categories' onChange={(event) => setSortBy(event.target.value)}>
                        <option value='ascend' defaultValue>Alphabetical (A-Z)</option>
                        <option value='descend'>Alphabetical (Z-A)</option>
                        <option value='hPrice'>Highest price</option>
                        <option value='lPrice'>Lowest price</option>
                    </select>
                </div>
            </div>
        </>
    );
}