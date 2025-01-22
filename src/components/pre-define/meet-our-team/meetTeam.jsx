import React from 'react';

const MeetTeam = ({ title, description, teamMembers }) => {  // `title`, `description`, aur `teamMembers` ko props ke roop mein pass kiya
    return (
        <section>

            <div className='mt-50 container text-center'>
                <h2>{title}</h2>  {/* Dynamic title */}
                <p className='fs-5'>{description}</p>  {/* Dynamic description */}

               
                <div className='row mt-40'>
                    {teamMembers.map((member, index) => (  // `teamMembers` array ko map kar rahe hain
                        <div className='mb-30 col-4' key={index}>
                            <img className='w-50' src={member.image} alt={member.name} />  {/* Dynamic image */}
                            <h3>{member.name}</h3>  {/* Dynamic team member name */}
                            <p className='fs-5'>{member.role}</p>  {/* Dynamic team member role */}
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}

export default MeetTeam;
