import SEO from '@/src/common/seo';
import FooterThree from '@/src/layout/footers/footer-3';
import HeaderThree from '@/src/layout/headers/header-3';
import Link from 'next/link';
import React from 'react';

const WhyIsThereAStrangeGtmTagInTheCodeOfMyJoomlaSite = () => {
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
                                            <h1>How to Download and Install Joomla – A Detailed Guide</h1>
                                        </section>

                                        <section>
                                            <h2>Step 1: Download the Latest Joomla Version</h2>
                                            <p>Before jumping into installation, you'll need to get the latest Joomla installation package.</p>
                                            <h3>Here’s how to get started:</h3>
                                            <ol>
                                                <li>
                                                    <strong>Visit the Official Joomla Website:</strong>
                                                    <p>Head to <a href="https://downloads.joomla.org" target="_blank" rel="noopener noreferrer">downloads.joomla.org</a> to ensure you're using an official, virus-free source.</p>
                                                </li>
                                                <li>
                                                    <strong>Look for the Full Package:</strong>
                                                    <p>Select the one marked "Download Full Package" for a fresh installation.</p>
                                                </li>
                                                <li>
                                                    <strong>Save the ZIP File Locally:</strong>
                                                    <p>Download the file to a location on your computer where it's easy to locate, such as your desktop.</p>
                                                </li>
                                                <li>
                                                    <strong>Extract the Files:</strong>
                                                    <p>Once the download is complete, unzip the file to a new folder on your computer. This extracted file will serve as the foundation for your Joomla site.</p>
                                                </li>
                                            </ol>
                                        </section>

                                        <section>
                                            <h2>Step 2: Prepare Your Webspace for Joomla</h2>
                                            <p>Before Joomla can come to life on your server, you need to complete these setup tasks.</p>
                                            <h3>Upload the Joomla Files to Your Server</h3>
                                            <ol>
                                                <li>
                                                    <strong>Identify Your Root Directory:</strong>
                                                    <p>Determine the correct folder for your domain or subdomain on your web hosting server. This is where Joomla’s files will ‘live’.</p>
                                                </li>
                                                <li>
                                                    <strong>Use FTP to Upload Files:</strong>
                                                    <p>A standard FTP client like <a href="https://filezilla-project.org/" target="_blank" rel="noopener noreferrer">FileZilla</a> works best. Connect to your hosting server and drag-and-drop the extracted Joomla files into the root directory.</p>
                                                </li>
                                                <li>
                                                    <strong>Wait for Upload Completion:</strong>
                                                    <p>Transfers might take 10–15 minutes depending on your file size and internet speed.</p>
                                                </li>
                                            </ol>

                                            <h3>Create a MySQL Database</h3>
                                            <ol>
                                                <li>
                                                    <p>Go to your hosting provider’s control panel (such as cPanel).</p>
                                                </li>
                                                <li>
                                                    <p>Open MySQL Database Wizard or an equivalent option.</p>
                                                </li>
                                                <li>
                                                    <p>Create a new database and make a note of the following credentials:
                                                        <ul>
                                                            <li>Database name</li>
                                                            <li>Username</li>
                                                            <li>Password</li>
                                                        </ul>
                                                    </p>
                                                </li>
                                            </ol>
                                        </section>

                                        <section>
                                            <h2>Step 3: Installing Joomla</h2>
                                            <p>The exciting part is here—turning your preparations into a functional Joomla website!</p>

                                            <h3>Launch the Installer</h3>
                                            <p>Open your browser and enter the URL of your domain or subdomain. You will land on Joomla’s Web Installer page, which will guide you through the setup.</p>

                                            <h3>Configure the Main Settings (Page 1)</h3>
                                            <p>The first screen focuses on the essential details of your website. Input the following information accurately:</p>
                                            <ul>
                                                <li>Site Name: Name your site—it'll appear in the browser tab header.</li>
                                                <li>Description: A brief explanation of your site (optional, but helpful for SEO).</li>
                                                <li>Admin Email: Used for password recovery and system notifications.</li>
                                                <li>Admin Username: Choose a secure username for managing your website.</li>
                                                <li>Admin Password: Create a strong password for your admin account.</li>
                                                <li>Site Offline Option: If you want the site to be hidden post-installation, toggle this to "Yes."</li>
                                            </ul>
                                            <p>Once everything is filled, click <strong>Next</strong>.</p>

                                            <h3>Configure the Database (Page 2)</h3>
                                            <p>On the next page, Joomla will ask for details about your MySQL database. Fill the form with the credentials you recorded earlier:</p>
                                            <ul>
                                                <li>Database Type: Leave this set to MySQLi (the default).</li>
                                                <li>Host Name: Usually “localhost” works, but check with your host provider if unsure.</li>
                                                <li>Username: Enter the database username.</li>
                                                <li>Password: Enter the password for your database user.</li>
                                                <li>Database Name: Provide the name of the database you created in Step 2.</li>
                                                <li>Table Prefix: Joomla will generate one automatically—no changes needed here.</li>
                                            </ul>
                                            <p>Once done, click <strong>Next</strong> to proceed.</p>

                                            <h3>Finalize the Installation (Page 3)</h3>
                                            <p>Review the default settings on the final screen. If you're satisfied, simply click <strong>Next</strong>. Joomla will finalize your setup—this should only take a few seconds.</p>
                                        </section>

                                        <section>
                                            <h2>Step 4: Completing the Installation</h2>
                                            <h3>Clean up Installation Files</h3>
                                            <p>For security reasons, click the button labeled <strong>Remove ‘installation’ folder</strong>. This ensures the temporary setup files are deleted so they can’t be exploited in the future.</p>

                                            <h3>Accessing Your Joomla Site</h3>
                                            <p>You’ll see links to your site's backend (administrator panel) and frontend (public website).</p>
                                            <ul>
                                                <li><strong>Backend:</strong> Manage your site through the URL <code>&lt;yourdomain.com&gt;/administrator</code>.</li>
                                                <li><strong>Frontend:</strong> Visit the main site and view your published content at your domain or subdomain.</li>
                                            </ul>
                                            <p>And just like that—you’ve finished installing Joomla! Congratulations on building the foundation of what we’re sure will become an amazing website.</p>
                                        </section>

                                        <footer>
                                            <p>Need Extra Help? If you run into any issues during installation, browse the official <a href="https://docs.joomla.org" target="_blank" rel="noopener noreferrer">Joomla Documentation</a> or join their vibrant community forum for support.</p>
                                            <p>We hope this guide has given you all the tools to get started confidently. Now, go ahead and make your website a masterpiece with Joomla!</p>
                                        </footer>
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

export default WhyIsThereAStrangeGtmTagInTheCodeOfMyJoomlaSite;
