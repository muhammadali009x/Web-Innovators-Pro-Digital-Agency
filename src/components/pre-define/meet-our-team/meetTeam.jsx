import React from 'react';

const MeetTeam = ({ title, description, teamMembers }) => {  // `title`, `description`, aur `teamMembers` ko props ke roop mein pass kiya
    return (
        <section>

            <div className='container'>
                <h2>{title}</h2>  {/* Dynamic title */}
                <p>{description}</p>  {/* Dynamic description */}

                <div className='row'>
                    <div className='col-6'>
                        <p>{description}</p>  {/* Dynamic paragraph */}
                        <div className='d-flex'>
                            <div>
                                <strong>Meet Your Team</strong>  {/* Static Text */}
                                <span>Say Hello to all the Web Innovators Pro</span>  {/* Static Text */}
                            </div>
                            <button>
                                Get To Know Us
                            </button>
                        </div>
                    </div>
                    <div className='col-6'>
                        <img src="" alt="Team Image" />  {/* You can pass an image URL here dynamically */}
                    </div>
                </div>

                <p>{description}</p>  {/* Dynamic paragraph */}

                <div className='row'>
                    {teamMembers.map((member, index) => (  // `teamMembers` array ko map kar rahe hain
                        <div className='col-4' key={index}>
                            <img src={member.image} alt={member.name} />  {/* Dynamic image */}
                            <h3>{member.name}</h3>  {/* Dynamic team member name */}
                            <p>{member.role}</p>  {/* Dynamic team member role */}
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}

export default MeetTeam;
