import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='footer bg-dark p-2'>
            <Container className='text-center text-muted'>
            <small><p>Copyright © Chinmoy Biswas</p></small>
            </Container>
        </div>
    );
};

export default Footer;