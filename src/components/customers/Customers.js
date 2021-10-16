import axios from 'axios';
import React, { useState, useEffect } from 'react'
import CustomerForm from './CustomerForm'
import CustomerList from './CustomerList'

function Customers() {
    const [customers, setCustomers] = useState([]);

    async function getCustomers() {
        const customerRes = await axios.get("http://localhost:5000/customer/");
        setCustomers(customerRes.data);
    }
    useEffect(() => {
        getCustomers();
    }, []);

    return (
        <>
            <CustomerForm getCustomers={getCustomers} />
            <CustomerList customers={customers} />
        </>
    )
}

export default Customers
