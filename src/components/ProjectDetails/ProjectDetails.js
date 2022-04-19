import React, { Component } from 'react';
import './ProjectDetails.css';
import TextCard from '../TextCard/TextCard';


const ProjectDetails = () => {

    return (
        <div>


            <div style={{ height: '350px', overflow: 'hidden' }} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}><path d="M-0.27,31.09 C149.99,150.00 349.20,-49.98 503.67,59.72 L521.16,233.39 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#2d862d' }}></path></svg></div>
            <div style={{ height: '350px', overflow: 'hidden' }} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}><path d="M-1.97,73.53 C149.99,150.00 271.49,-49.98 530.76,159.38 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#2d862d' }}></path></svg></div>

            <div className="container-cards">
                <div className="card1">
                    <TextCard header='1. Easy to find any topic you want to learn about'
                        description='LearnStation offers a great variety of subjects students can start learning.'>
                    </TextCard>
                </div>

                <div className="card2">
                    <TextCard header='2. Take quizes and earn points to climb the leaderboard'
                        description='Earn points, level up and become the greatest player for any particular topic.'

                    >
                    </TextCard>
                </div>

                <div className="card3">
                    <TextCard header='3. Take courses and learn in a fun manner'
                        description='Courses are user-friendly and easy to go through without being too complicated.'>
                    </TextCard>
                </div>

            </div>

            <div className='join-now'>
                <h2>Many topics await you</h2>
                <p>What are you waiting for? Join us now!</p>
                <button className="tiny ui button red google ">
                    <i className="google icon" />
                    Sign up
                </button>
            </div>



        </div>

    );
};

export default ProjectDetails;