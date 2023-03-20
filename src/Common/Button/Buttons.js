import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Button } from 'reactstrap'

const Buttons = (props) => {
    const { name, toggleModal } = props

    switch (name) {
        case "Add New":
            return (
                <Button className='text-white bg-dark px-3 p-3' onClick={toggleModal}>
                    <FaPlus /> Add New
                </Button>
            )
    }
}

export default Buttons