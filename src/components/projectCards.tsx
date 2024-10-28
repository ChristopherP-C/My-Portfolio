// create a function which returns project cards based on the value returned from a button click
import React from 'react';

interface ProjectCardsProps {
    cardContent: string;
    cardPop: boolean;
}

export default function ProjectCards(props: ProjectCardsProps) {
    const getCard = () => {

        if(props.cardContent === 'project1') {
            return (
                <div>
                    <p>Project 1 description</p>
                </div>
            );
        } else if(props.cardContent === 'project2') {
            return (
                <div>
                    <p>Project 2 description</p>
                </div>
            );
        } else if(props.cardContent === 'project3') {
            return (
                <div>
                    <p>Project 3 description</p>
                </div>
            );
        } else if(props.cardContent === 'project4') {
            return (
                <div>
                    <p>Project 4 description</p>
                </div>
            );
        } else if(props.cardContent === 'project5') {
            return (
                <div>
                    <p>Project 5 description</p>
                </div>
            );
        } else if(props.cardContent === 'project6') {
            return (
                <div>
                    <p>Project 6 description</p>
                </div>
            );
        } 
    }
    return (
        <div>
            {getCard()}
        </div>
    )
}
