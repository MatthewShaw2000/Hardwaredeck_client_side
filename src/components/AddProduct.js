//React Components
import React, { useState, useEffect } from 'react';

//CSS 
import '../css/style.css';



export default function AddProduct()
{
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();

    const [categories, setCategories] = useState();

    useEffect(() => {
        const tempCats = [
            {
                name: 'Motherboards'
            }, 
            {
                name: 'graphics cards' 
            },
            {
                name: 'CPU'
            }
        ];
        setCategories(tempCats);
    }, [])




    //check form and add product to database
    async function addProduct(event)
    {
        event.preventDefault();

        //Check inputted values
        let check = false;
        if(!name || !description || !price)
        {
            check = true;
        }
        if(isNaN(price))
        {
            check = true;
        }


        const addProductMessage = document.getElementById("addProductMessage");

        if(!check)
        {
            addProductMessage.setAttribute("style", "color: green");
            addProductMessage.innerHTML = "<p>Details added to database</p>";
        }
        else
        {
            addProductMessage.setAttribute("style", "color: red");
            addProductMessage.innerHTML = "<p>Please make sure details are inputted correctly</p>";
        }
    }




    return (
        <>
            <section className='accountSection'>
                <h2>Add Product</h2>

                <form onSubmit={addProduct}>
                    <label>Product Name</label>
                    <input type='text' name='name' onChange={(event) => setName(event.target.value)} placeholder='Input Product Name' required/>

                    <label>Product Description</label>
                    <textarea type='text' name='description' onChange={(event) => setDescription(event.target.value)} placeholder='Input Product Description' required></textarea>

                    <label>Product Price</label>
                    <input type='text' name='price' onChange={(event) => setPrice(parseFloat(event.target.value))} placeholder='Input Product Price: 0.00' required/>
                
                    <label>Category</label>
                    <select name='category' onChange={(event) => setCategory(event.target.value)}>
                        {
                            categories
                            ?
                            categories.map(category => {
                                return <option key={category.name} value={category.name}>{category.name}</option>
                            })
                            :
                            null
                        }
                    </select>
                    
                    <div id='addProductMessage'></div>

                    <input type='submit' className='button' value='Add product'/>
                </form>

            </section>
        </>
    );
}