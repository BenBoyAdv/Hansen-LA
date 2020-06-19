import React from 'react';
import '../../App.css';

class PublicWork extends React.Component {
    render () {
        return (
            <div id="projects-container" className="flex-col a-center">
                <div className="w-full project-box project-1">project1</div>
                <div className="w-full project-box">project2</div>
                <div className="w-full project-box">project3</div>
            </div>
        )
    }
}

export default PublicWork;