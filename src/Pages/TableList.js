import React, { useEffect, useState } from 'react'
import ls from 'local-storage'
import DataTable from 'react-data-table-component';
import moment from 'moment';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Input } from 'reactstrap';

import Delete from '../Common/Delete/Delete';
import TableHeader from '../Common/Table/TableHeader';
import Buttons from '../Common/Button/Buttons';
import AddEditForm from '../Common/Table/AddEditForm';
import { formValidate } from '../Utils/validation';
import './index.css'

const TableList = () => {

    const [data, setData] = useState([])

    const [myData, setMyData] = useState({
        id: Date.now(),
        name: '',
        email: '',
        password: '',
        address: '',
        city: '',
        state: '',
        date: '',
        age: '',
        color: '',
        status: '',
        image: '',
    })

    const [modal, setModal] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toggleTable, setToggleTable] = useState(true)

    const [editId, setEditId] = useState(null)
    const [deleteId, setDeleteId] = useState(null)

    const [formErrors, setFormErrors] = useState({})

    const toggleModal = () => setModal(!modal)
    const deleteClose = () => setDeleteOpen(!deleteOpen)

    const customStyles = {
        headCells: {
            style: {
                paddingTop: "8px",
                paddingBottom: "8px",
            },
        },
        cells: {
            style: {
                paddingTop: "8px",
                paddingBottom: "8px",
            },
        },
    };

    const onChangeInput = (e) => {
        setMyData({ ...myData, [e.target.name]: e.target.value })
    }

    const getLocalStorage = () => {
        if (ls.get("data")) {
            setData(ls.get("data"))
        }
    }

    useEffect(() => {
        getLocalStorage()

        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            onSubmitFrom()
        }
    }, [formErrors])

    useEffect(() => {
        if (!modal) {
            Object.keys(formErrors).forEach((i) => formErrors[i] = '')
        }
        ls.set("data", data)
    }, [modal, data])

    const columns = [
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: "Address",
            selector: (row) => row.address,
        },
        {
            name: "City",
            selector: (row) => row.city,
            sortable: true,
        },
        {
            name: "State",
            selector: (row) => row.state,
            sortable: true,
        },
        {
            name: "Date",
            selector: (row) => moment(row.date).format('YYYY-MM-DD HH:mm'),
        },
        {
            name: "Age",
            selector: (row) => row.age,
            sortable: true,
        },
        {
            name: "Color",
            selector: (row) =>
                <div>
                    <Input
                        style={{ padding: '3px', width: '40px' }}
                        type="color"
                        name="color"
                        value={row.color}
                        disabled
                    />
                </div>,
        },
        {
            name: "Status",
            selector: (row) => row.status,
        },
        {
            name: "Action",
            selector: (row) =>
                <div className='text-center'>
                    <span
                        className='me-3 edit-icon'
                        onClick={() => { onEdit(row.id) }}
                    >
                        <FaEdit size={18} />
                    </span>
                    <span
                        className='delete-icon'
                        onClick={() => { onDelete(row.id) }}>
                        <FaTrash size={18} />
                    </span>
                </div>
        },

    ];

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(formValidate(myData))
        setIsSubmitting(true)
    }

    const onSubmitFrom = (e) => {
        if (editId !== null) {
            setData(data.splice(data.findIndex((element) => element.id === editId), 1, myData))
            ls.set("data", data)
            getLocalStorage()
            toggleModal()
            resetForm()
            setEditId(null)
        } else {
            setData([...data, myData])
            toggleModal()
            resetForm()
        }
    }

    const onDelete = (id) => {
        setDeleteId(id)
        setDeleteOpen(true)
    }

    const onDeleteProduct = (id) => {
        data.splice(data.findIndex((element) => element.id === deleteId), 1)
        ls.set("data", data);
        setDeleteOpen(false)
        getLocalStorage();
    }

    const onEdit = (id) => {
        setEditId(id)
        setMyData(data.filter((element) => element.id === id)[0])
        toggleModal()
    }

    const resetForm = () => {
        setMyData({
            id: Date.now(),
            name: '',
            email: '',
            password: '',
            address: '',
            city: '',
            state: '',
            date: '',
            age: '',
            color: '',
            status: '',
            image: ''
        })
    }

    const onCancel = () => {
        resetForm()
        toggleModal()
    }

    return (
        <div className='bg-light rounded p-3 mb-3 pb-3'>
        <div className='card shadow-sm px-2 me-3 bg-white rounded'>
            <TableHeader
                headerName='React practical Task'
                setToggleTable={setToggleTable}
                toggleTable={toggleTable}
            />

            {toggleTable && (
                <>
                    <div className='card-body'>
                        <div className='float-left d-flex'>
                            <Buttons name="Add New" toggleModal={toggleModal} />
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12  overflow-auto">
                            <DataTable
                                border
                                columns={columns}
                                data={data}
                                customStyles={customStyles}
                                responsive={true}
                                dense
                            />
                        </div>
                    </div>
                </>
            )}

            <AddEditForm
                modal={modal}
                toggleModal={toggleModal}
                onCancel={onCancel}
                handleSubmit={handleSubmit}
                myFormData={myData}
                formErrors={formErrors}
                onChangeInput={onChangeInput}
            />

            <Delete
                deleteOpen={deleteOpen}
                deleteClose={deleteClose}
                onDeleteProduct={onDeleteProduct}
            />
        </div>
        </div>
    )
}

export default TableList