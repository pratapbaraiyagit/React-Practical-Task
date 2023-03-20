import React, { lazy } from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Routes, Route } from "react-router-dom";

const Table = lazy(() => import('../../Pages/TableList'))

const Content = () => (
    <Container fluid>
        <Routes>
            <Route exact path="/" element={<Table />} />
        </Routes>
    </Container>
);

export default Content;
