import SEO from '@/src/common/seo';
import FooterThree from '@/src/layout/footers/footer-3';
import HeaderThree from '@/src/layout/headers/header-3';
import Link from 'next/link';
import React from 'react';

const Index = () => {
    return (
        <>
            <HeaderThree />
            <SEO />
            <div className="postbox__area pt-10 pb-20">
                <div className="container">
                    <div className="row">
                        {/* left site */}
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-12">
                            <div className="postbox__wrapper pr-50 mr-30">
                                <div className="postbox__border">
 
                                    <article>
                                        <section>
                                            <h1>Building an Industry-Level Career Portal for msg systems | 2020</h1>
                                        
                                        </section>
                                        <section>
                                            <p>
                                                When msg systems, a leading IT solutions provider with over 8,500 employees, approached us in 2020, the task was clear yet highly ambitious. They needed an advanced career portal tailored to IT professionals, with seamless integration into their existing ecosystem and the ability to host hundreds of job vacancies. The result? A cutting-edge, Joomla-based platform that not only met these expectations but gained recognition by ranking 3rd in a German study evaluating online career presences.
                                            </p>
                                        </section>

                                        <section>
                                            <h2>The Challenge</h2>
                                            <p>
                                                Msg systems tasked us with building an enterprise-level recruitment and career portal that would both engage IT professionals and streamline their hiring processes. Anchored in their existing Joomla framework, this platform had to seamlessly integrate with SAP-based systems for automated job data import/export while also allowing manual input by HR teams across subsidiaries.
                                            </p>
                                            <p>
                                                The portal needed to feature between 300 and 400 dynamic job vacancies at any given time, along with comprehensive filtering options for applicants to sort by location, job focus, entry level, and employer (including msg subsidiaries). Additionally, job seekers should be able to submit applications directly through the platform or route them via the existing HR system.
                                            </p>
                                            <p>
                                                Design posed another unique challenge; we needed to adhere to msg's strict corporate branding while creating a modern and visually engaging platform. With a project of this scale, consistent collaboration and precise execution were paramount.
                                            </p>
                                        </section>

                                        <section>
                                            <h2>About the Client</h2>
                                            <p>
                                                Msg systems AG is an independent group of companies headquartered near Munich, Germany. Known for their expertise in IT and industry solutions, they employ more than 8,500 professionals worldwide. Their goal? To deliver intelligent, forward-thinking solutions tailored to the needs of their clients.
                                            </p>
                                        </section>

                                        <section>
                                            <h2>The Solution</h2>
                                            <p>
                                                Given the complexity of the project, we began by focusing on finalizing detailed requirements through close collaboration with msg systems’ marketing and IT teams. Here's how we delivered a tailored solution:
                                            </p>
                                            <h3>Custom Layout and Design Framework</h3>
                                            <p>
                                                Our design team developed a bespoke layout framework, balancing msg’s corporate guidelines with contemporary aesthetics. Collaboration with their marketing department ensured every design decision aligned with their vision. This layout also became the foundation for future msg websites.
                                            </p>

                                            <h3>Job Management System</h3>
                                            <p>
                                                Our developers built a custom solution powered by an existing Joomla extension to handle job vacancy information. This included a seamless integration with an external SAP database to import job listings, alongside functionality for HR teams to manually input or edit data across subsidiaries.
                                            </p>

                                            <h3>Dynamic and Interactive Features</h3>
                                            <p>
                                                A robust filtering system allowed users to search and sort job listings with ease. The portal displayed contextually relevant job feeds dynamically integrated into various pages.
                                            </p>

                                            <h3>Streamlined Workflows</h3>
                                            <p>
                                                After the portal’s launch, we worked closely with msg’s HR team during a month-long review period. This iteration phase focused on fine-tuning the upload and editing workflows based on employee feedback, optimizing usability for their daily operations.
                                            </p>
                                        </section>

                                        <section>
                                            <h2>Lessons Learned</h2>
                                            <p>
                                                This project challenged our team in exciting new ways. Designing for a multinational company of this size taught us to innovate within the constraints of strict branding and security standards. Collaborating with msg’s IT security team refined not only our deliverables but also the Joomla core code itself, enhancing platform stability and security.
                                            </p>
                                            <p>
                                                Building a solution of this complexity stretched our team’s capabilities, offering invaluable experience in delivering large-scale, enterprise-ready solutions. The takeaway? Success lies in collaboration, from clear communication with stakeholders to quick adjustments based on end-user feedback.
                                            </p>
                                        </section>

                                        <section>
                                            <h2>Notable Features of the Career Portal</h2>
                                            <ul>
                                                <li>
                                                    <strong>Advanced Job Search and Filtering:</strong> The portal’s core feature is its ability to filter by multiple overlapping criteria such as location, professional focus, and entry level. Dynamic feeds showcase job openings based on the specific context of each page, enriching the user’s browsing experience.
                                                </li>
                                                <li>
                                                    <strong>Data Import and Export:</strong> Integration with SAP allowed for seamless daily syncing of job vacancies, leveraging both automated imports and manual HR inputs. Additionally, we created export feeds so job openings could be featured on external platforms like LinkedIn.
                                                </li>
                                                <li>
                                                    <strong>Multi-Level Login Access:</strong> The platform supports three user types:
                                                    <ul>
                                                        <li>Website administrators using the backend to manage core operations.</li>
                                                        <li>HR staff and subsidiaries managing job vacancies directly.</li>
                                                        <li>Job applicants accessing employment documents and submitting their details efficiently.</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </section>

                                        <section>
                                            <h2>Measuring Success</h2>
                                            <p>
                                                Beyond ranking 3rd in a national study of online career presences, the portal achieved measurable success through its usability.
                                            </p>
                                            <ul>
                                                <li>HR teams reported reduced friction in handling job data.</li>
                                                <li>Applicants praised the intuitive interface and industry-specific tailoring of the platform.</li>
                                                <li>Msg systems established a stronger employer brand within the IT community, further enhancing their recruitment pipeline.</li>
                                            </ul>
                                        </section>

                                        <section>
                                            <h2>Moving Forward</h2>
                                            <p>
                                                The msg systems career portal stands as one of our proudest achievements – a collaborative effort that truly reflects the intersection of functionality, aesthetic brilliance, and a seamless user experience. Projects like this push us to grow, innovate, and deliver excellence at every stage.
                                            </p>
                                            <p>
                                                For organizations with similar ambitions, we bring the same level of dedication and capability to every engagement. If you're looking to build a career platform or implement enterprise-level digital solutions that scale, let's start the conversation.
                                            </p>
                                        </section>
                                    </article>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <FooterThree />
        </>
    );
};

export default Index;
