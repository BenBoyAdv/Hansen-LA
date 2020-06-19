import React from 'react';
import '../../App.css';

class PublicWork extends React.Component {
    render () {
        return (
            <div id="projects-container" className="flex-col a-center j-center">
                <a className="w-full project-box project-1">project1</a>
                <a className="w-full project-box">project2</a>
                <a className="w-full project-box">project3</a>
            </div>
        )
    }
}

export default PublicWork;