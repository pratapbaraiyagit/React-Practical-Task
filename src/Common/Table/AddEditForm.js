import React from 'react'
import {
    Button,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row
} from 'reactstrap'
import './index.css'

const AddEditForm = (props) => {
    const {
        modal,
        toggleModal,
        onCancel,
        handleSubmit,
        myFormData,
        formErrors,
        onChangeInput,
    } = props

    return (
        <Modal isOpen={modal} toggle={toggleModal}>
            <ModalHeader toggle={onCancel}>Form</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <Row className=' align-items-center pt-1'>
                        <Col lg={12}>
                            <Label for='name'>Name</Label>
                            <Input
                                type='text'
                                id="name"
                                name='name'
                                placeholder='Name'
                                value={myFormData.name}
                                onChange={onChangeInput}
                            />
                            {formErrors.name && (<small className="text-danger">{formErrors.name}</small>)}
                        </Col>
                        <Col lg={12}>
                            <Label for='email'>email</Label>
                            <Input
                                type='email'
                                id="email"
                                name='email'
                                placeholder='email'
                                value={myFormData.email}
                                onChange={onChangeInput}
                            />
                            {formErrors.email && (<small className="text-danger">{formErrors.email}</small>)}
                        </Col>
                        <Col lg={12}>
                            <Label for='password'>password</Label>
                            <Input
                                type='password'
                                id="password"
                                name='password'
                                placeholder='password'
                                value={myFormData.password}
                                onChange={onChangeInput}
                            />
                            {formErrors.password && (<small className="text-danger">{formErrors.password}</small>)}
                        </Col>
                        <Col lg={12} className='align-items-center pt-1'>
                            <FormGroup>
                                <Label for="address">Address</Label>
                                <Input
                                    type="textarea"
                                    id="address"
                                    name="address"
                                    maxLength={250}
                                    rows="3"
                                    value={myFormData.address}
                                    onChange={onChangeInput}
                                    placeholder="Address"
                                />
                                {formErrors.address && (<small className="text-danger">{formErrors.address}</small>)}
                            </FormGroup>
                        </Col>
                        <Col lg={12}>
                            <FormGroup>
                                <Label for="city">
                                    Select City
                                </Label>
                                <Input
                                    type="select"
                                    id="city"
                                    name="city"
                                    value={myFormData.city}
                                    onChange={onChangeInput}
                                >
                                    <option disabled="disabled">Select City</option>
                                    <option>Surat</option>
                                    <option>Ahmedabad</option>
                                    <option>Bhavnagar</option>
                                    <option>Rajkot</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={12}>
                            <FormGroup>
                                <Label for="state">
                                    Select state
                                </Label>
                                <Input
                                    type="select"
                                    id="state"
                                    name="state"
                                    value={myFormData.state}
                                    onChange={onChangeInput}
                                >
                                    <option disabled="disabled">Select state</option>
                                    <option>Gujarat</option>
                                    <option>Maharastra</option>
                                    <option>Goa</option>
                                    <option>Rajasthan</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={12}>
                            <Label for='date'>date</Label>
                            <Input
                                type='datetime-local'
                                id="date"
                                name='date'
                                placeholder='date'
                                value={myFormData.date}
                                onChange={onChangeInput}
                            />
                            {formErrors.date && (<small className="text-danger">{formErrors.date}</small>)}
                        </Col>
                        <Col lg={12}>
                            <FormGroup>
                                <Label className='mt-2' for="age">age</Label>
                                <Input
                                    type="range"
                                    id="age"
                                    name="age"
                                    value={myFormData.age}
                                    onChange={onChangeInput}
                                />
                                <Label>{myFormData.age}</Label>
                                {formErrors.age && (<small className="text-danger">{formErrors.age}</small>)}
                            </FormGroup>
                        </Col>
                        <Col lg={12}>
                            <FormGroup>
                                <Label for="color">color</Label>
                                <Input
                                    type="color"
                                    id="color"
                                    name="color"
                                    value={myFormData.color}
                                    onChange={onChangeInput}
                                />
                                {formErrors.color && (<small className="text-danger">{formErrors.color}</small>)}
                            </FormGroup>
                        </Col>
                        {/* <Col lg={12}>
                            <FormGroup>
                                <Label for="color">Image</Label>
                                <ImgUpload
                                    name='image'
                                    multiple={false}
                                    setImages={setProfileImage}
                                    oldImages={oldProfileImage}
                                    setOldImages={images => setOldProfileImage(images)}
                                    images={profileImage}
                                />
                            </FormGroup>
                        </Col> */}
                        <Col lg={12}>
                            <Label>Status</Label>
                            <FormGroup>
                                <Row className='align-items-center pt-1'>
                                    <Col lg={3} md={4}>
                                        <Input
                                            name="status"
                                            type="radio"
                                            value='active'
                                            checked={myFormData.status === 'active' ? true : false}
                                            onChange={onChangeInput}
                                        />
                                        {' '}
                                        <Label check>active</Label>
                                    </Col>
                                    <Col lg={4} md={4}>
                                        <Input
                                            name="status"
                                            type="radio"
                                            value='inactive'
                                            checked={myFormData.status === 'inactive' ? true : false}
                                            onChange={onChangeInput}
                                        />
                                        {' '}
                                        <Label check>inactive</Label>
                                    </Col>
                                </Row>
                                {formErrors.status && (<small className="text-danger">{formErrors.status}</small>)}
                            </FormGroup>
                        </Col>
                    </Row>

                    <ModalFooter>
                        <Button color="btn btn-outline-danger" onClick={onCancel}>
                            Cancel
                        </Button>
                        <Button type='submit' color='btn btn-outline-success'>
                            Save
                        </Button>
                    </ModalFooter>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default AddEditForm