import React, {useState} from 'react';
import './App.css'

const Home = () => {
    return(
        <div className='container'>
            <header className='first-box'>
                <nav>
                    <h2 className='logo'>Blogr</h2>
                    <section className='nav-pack'>
                        <ul  className='nav-ul'>
                            <li>Product</li>
                            <li>Company</li>
                            <li>Connect
                                {/* <ul>
                                    <li>Contact</li>
                                    <li>Newsletter</li>
                                    <li>LinkedIn</li>
                                </ul> */}
                            </li>
                        </ul>
                        <div className='nav-clicks'>
                            <p>Login</p>
                            <button>Sign Up</button>
                        </div>
                    </section>
                </nav>
                <section>
                    <h1>A modern publishing platform</h1>
                    <p>Grow your audience and build your online brand</p>
                    <div>
                        <button>Start For Free</button>
                        <button>Learn More</button>
                    </div>
                </section>
            </header>
            
            <div className='second-box'>
                <h2>Designed for the future</h2>
                <section>
                    <article>
                        <h3>Introducing an extensible editor</h3>
                        <p> 
                            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                            videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                            change the looks of a blog.
                        </p>
                    </article>

                    <article>
                        <h3>Robust content management</h3>
                        <p>
                            Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                            by adding customized categories, sections, format, or flow. With this functionality, you are in full control.
                        </p>
                    </article>
                </section>
                <aside>
                    <img/>
                </aside>
            </div>

            <div className='third-box'>
                <aside>
                    <img/>
                </aside>
                <article>
                    <h2>State of the Art Infrastructure</h2>
                    <p>
                    With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                    This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                    </p>
                </article>
            </div>

            <div className='fourth-box'>
                <section>
                    <article>
                        <h3>Free, open, simple</h3>
                        <p>
                        Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                        </p>
                    </article>

                    <article>
                        <h3>Powerful tooling</h3>
                        <p>
                        Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                        capable of producing even the most complicated sites.
                        </p>
                    </article>
                </section>
                <aside>
                    <img/>
                </aside>
            </div>

            <footer>
                <h2>Blogr</h2>

                <ul>
                    <li className='first-li'>Product</li>
                    <li>Overview</li>
                    <li>Pricing</li>
                    <li>Marketplace</li>
                    <li>Features</li>
                    <li>Integrations</li>
                </ul>

                <ul>
                    <li className='first-li'>Company</li>
                    <li>About</li>
                    <li>Team</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>

                <ul>
                    <li className='first-li'>Connect</li>
                    <li>Contact</li>
                    <li>Newsletter</li>
                    <li>LinkedIn</li>
                </ul>
            </footer>
        </div>
    )
}

export default Home;