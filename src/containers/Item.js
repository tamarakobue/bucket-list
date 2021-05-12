import React, {useState, useEffect} from 'react'


const Item = props => {

    const [item, setItem]= useState({})

    useEffect(() => {
        fetch(`http://localhost:3001/items/${props.match.params.id}`)
        .then(res => res.json())
        .then(item => { setItem(item) })
    }, [])


    return (
        <div>
            <h1>{item.name}</h1>
            <ul className="theList">
                <li><h3>Category: {item.category}</h3></li> 
                <li><h3>Ranking: {item.ranking}</h3></li>
                <li><h3>Notes: {item.notes}</h3></li>
            </ul>
        </div>
    )
}
export default Item