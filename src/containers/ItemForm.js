import React, { useState, useEffect } from 'react'

const ItemForm = (props) => {
    const [item, setItem] = useState({})
    const [value, setValue]= useState({
        name: "",
        category: "", 
        ranking: "",
        notes: ""
    })
//(e) =>setValue({...value, ranking: e.target.value})

    const handleChange = e => {
        // e.target.name
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

    // handleChange put everything i type as i type it into item in state
    // onSUbmit call the handleSubmit and it will POST it in state and then redirected back to all the items. 
    // It does it by props.history.push("/items")

    return (
        <div>
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
                <button type="submit"> Submit </button>
        </form>
        </div>
    )
}
export default ItemForm