import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='footer bg-dark p-2'>
            <Container className='text-center text-white'>
            <small><p>This is footer</p></small>
            </Container>
        </div>
    );
};

export default Footer;