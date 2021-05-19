import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'

const ItemForm = (props) => {
    const [item, setItem] = useState({})
    const [value, setValue]= useState({
        name: "",
        category: "", 
        ranking: "",
        notes: ""
    })


    const handleChange = e => {
        setValue({...value, [e.target.name]: e.target.value})
    }



    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        setItem(value);

        const configObj = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(value)
        }

        fetch('http://localhost:3001/items/', configObj)
          .then(response => response.json())
          .then(data => {
            props.history.push("/items")
            })
          .catch((error) => console.error(error))
      };

    return (
        <div className="todoListMain">
            <div className="header">
            <h1>Add New Bucket List Items</h1>
            <form onSubmit={handleSubmit}> 
                <input
                    type='text'
                    name='name'
                    value={value.name}
                    placeholder='Bucket List Item'
                    onChange={handleChange}
                /><br />
                <input
                    type='text'
                    name='category'
                    value={value.category}
                    placeholder='Category'
                    onChange={handleChange}
                /><br />
                <input
                    type='text'
                    name='ranking'
                    value={value.ranking}
                    placeholder='Ranking'
                    onChange={handleChange}
                /><br />
                <input
                    type='text'
                    name='notes'
                    value={value.notes}
                    placeholder='Notes'
                    onChange={handleChange}
                /><br />
                <Button type="submit" variant="outline-danger">Submit</Button>
        </form>
        </div>
        </div>
    )
}
export default ItemForm