import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar.js';
import ImageCarousel from '../Carousel/ImageCarousel';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import Divider from '../Divider/Divider.js';

const FrontPage = () => {

    return (
        <div>
            <Navbar />
            <ImageCarousel />
            <ProjectDetails />
            <Divider header='About' text='This is an E-Learning Web App built with React and Redux and it is a personal project. For non-commercial learning purposes only.' />
        </div>
    );
}

export default FrontPage;