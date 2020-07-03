import React from 'react';
import Photo from '../Assets/HLA_ABOUT_TEMP.png'

class AboutContent extends React.Component {
    render() {
        return (
            <div className="about-container">
                <div className="mobile-about-box"></div>
                <div className="about-photo">
                    <img src={Photo} alt="Greg"/>
                </div>
                <div className="about-text">
                Greg Hansen began his lifelong interest in the outdoor environment while at Huntingdon College,
where he studied environmental sciences. Even though he majored in English, he continued his
education at the University of Georgia where he received a degree in landscape architecture.
After graduation he returned to Alabama and began his landscape architectural career. Having
worked for several years in offices that specialized in urban design Greg began his own practice
in 2000. Over the past 20 years his work has focused on quality work both in public and private
practice.
                </div>
            </div>
        )
    }
}

export default AboutContent;