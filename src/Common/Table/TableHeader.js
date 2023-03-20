import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const TableHeader = ({
    headerName,
    setToggleTable,
    toggleTable,
}) => {
    return (
        <>
            <div className='card-body border-bottom'>
                <div className='float-left'>
                    <h4 className="card-title float-left"> {headerName} </h4>
                </div>
                <div className='float-right'>
                    <FaChevronDown size='20px' role='button' className='me-3' onClick={() => setToggleTable(!toggleTable)} />
                </div>
            </div>
        </>
    )
}

export default TableHeader