import React from 'react';

class ContactContent extends React.Component {
    render() {
        return (
            <div className="h-full w-full flex-col a-center j-center">
                <div className="contact-background"></div>

                {/* <div className="contact-container">
                    <div className='contact-type'>PHONE</div>
                    <div className='contact-type'>EMAIL</div>
                </div> */}
                <div className="contact-container">
                    <a href="tel: +12055676801">PHONE <br/>+1 205-567-6801</a>
                    <a href="mailto: greg@hansenla.com">EMAIL <br/>greg@hansenla.com</a>    
                </div>

              
            </div>
        )
    }
}

export default ContactContent;