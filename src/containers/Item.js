import React, {useState, useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'



const Item = props => {

    const [item, setItem]= useState({})

    useEffect(() => {
        fetch(`http://localhost:3001/items/${props.match.params.id}`)
        .then(res => res.json())
        .then(item => { setItem(item) })
    }, [])


    return (
        <div>
            <Modal.Dialog>
                    <Modal.Title>{item.name}</Modal.Title>
                <Modal.Body>
                    <h3 className="modal-items-list">Category:</h3>
                    <h5 className="modal-items-list-text">{item.category}</h5>
                    <h3 className="modal-items-list">Ranking: </h3>
                    <h5 className="modal-items-list-text">{item.ranking}</h5>
                    <h3 className="modal-items-list">Notes: </h3>
                    <p className="modal-items-list-text">{item.notes}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" href="/items">Back</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}
export default Item