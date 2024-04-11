import { TextField, Container,Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import React, { useState } from 'react'
import '../SignUp/SignUp.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            contactNumber: '',
            password: '',
        })

        // Perform validation before submission
        let errors = {};
        let isValid = true;

        // Name validation: required
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }

        // Email validation: required and valid format
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'Invalid email address';
            isValid = false;
        }

        // Username validation: required
        if (!formData.username.trim()) {
            errors.username = 'Username is required';
            isValid = false;
        }

        // Contact Number validation: required and valid format
        if (!formData.contactNumber.trim()) {
            errors.contactNumber = 'Contact Number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.contactNumber)) {
            errors.contactNumber = 'Invalid contact number';
            isValid = false;
        }

        // Password validation: required and at least 6 characters long
        if (!formData.password.trim()) {
            errors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.trim().length < 8) {
            errors.password = 'Password must be at least 8 characters long';
            isValid = false;
        }

        if (isValid) {
            // Submit the form or perform further actions
            console.log('Form submitted:', formData);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                contactNumber: '',
                password: ''
            });
        } else {
            // Update state with validation errors
            setFormErrors(errors);
        }
    };
    return (
        <>
            <Container>
                <Link to='/'>
                    <Button variant='outlined' style={{ backgroundColor: '#9A7C5D', color: 'black', marginTop: '10px', border: 'none' }}>BACK</Button>
                    {/* <ArrowBackIosNew style={{ textAlign: 'center', backgroundColor: '#9A7C5D', color: 'black',, borderRadius: '90px', padding: '10px' }}></ArrowBackIosNew> */}
                </Link>

                <form className="container" onSubmit={handleSubmit}>
                    <PermIdentityIcon sx={{ borderRadius: '100px', padding: '15px', backgroundColor: 'green', color: 'white' }} />
                    <Typography variant="h4" gutterBottom>
                        SIGN UP
                    </Typography>
                    <TextField
                        className="textField"
                        label="First Name"
                        name="firstName"
                        sx={{ fontSize: '10px' }}
                        value={formData.firstName}
                        onChange={handleChange}
                        error={!!formErrors.firstName}
                        helperText={formErrors.firstName}
                        required

                    />
                    <TextField
                        className="textField"
                        label="Last Name"
                        name="lastName"
                        sx={{ fontSize: '10px' }}
                        value={formData.lastName}
                        onChange={handleChange}
                        error={!!formErrors.lastName}
                        helperText={formErrors.lastName}
                        style={{ marginTop: '10px' }}
                        required

                    />
                    <TextField
                        className="textField"
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!formErrors.email}
                        helperText={formErrors.email}
                        style={{ marginTop: '10px' }}
                        required
                    />

                    <TextField
                        className="textField"
                        label="Contact Number"
                        name="contactNumber"
                        type="tel"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        error={!!formErrors.contactNumber}
                        helperText={formErrors.contactNumber}
                        style={{ marginTop: '10px' }}
                        required
                    />
                    <TextField
                        className="textField"
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        error={!!formErrors.password}
                        helperText={formErrors.password}
                        style={{ marginTop: '10px', marginBottom: '6px' }}
                        required
                    />
                    <Button className="signUpButton" variant="contained" color="primary" type="submit">
                        Sign Up
                    </Button>
                </form>
            </Container>
        </>
    )
}

export default SignUp
