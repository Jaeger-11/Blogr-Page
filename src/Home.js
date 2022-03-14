import React, {useEffect, useState} from 'react';
import { useGlobalContext } from './context';
import data from './data'
import logo from './images/logo.svg';
import imageTwo from './images/illustration-editor-mobile.svg';
import imageThree from './images/illustration-phones.svg';
import imagefour from './images/illustration-laptop-mobile.svg';

const Home = () => {
    const {closeSubmenu} = useGlobalContext();
    const [width, setWidth] = useState()
    const checkWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() =>{
        window.addEventListener('resize', checkWidth)
        console.log(width)
        return () => {
            window.removeEventListener('resize', checkWidth)
        }
    })

    const bgfill = {
        background: 'linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))'
    }
    return(
    <div className='home'>
        <div className='container ' style={bgfill} >
            <section className='first-section'>
                <h1>A modern publishing platform</h1>
                <p>Grow your audience and build your online brand</p>
                <div>
                    <button className='FSBTN1'>Start For Free</button>
                    <button className='FSBTN2'>Learn More</button>
                </div>
            </section>
        </div>
        <div className='second-box'>
            <h2>Designed for the future</h2>
            <div className='SBGRID'>
                <div className='image-box'>
                    <img src={imageTwo} alt='img-two' className='image-two'/>
                </div>
                <section className='second-section'>
                    <article className='SSART'>
                        <h3>Introducing an extensible editor</h3>
                        <p> 
                            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                            videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                            change the looks of a blog.
                        </p>
                    </article>

                    <article className='SSART'>
                        <h3>Robust content management</h3>
                        <p>
                            Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                            by adding customized categories, sections, format, or flow. With this functionality, you are in full control.
                        </p>
                    </article>
                </section>
            </div>
        </div>

        <div className='third-box'>
            <div className='TBGRID'>
                
                    <img src={imageThree} alt="img-three" className = 'image-three'/>
                
                <article>
                    <h2>State of the Art Infrastructure</h2>
                    <p>
                    With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                    This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                    </p>
                </article>
            </div>
        </div>
        <div className='fourth-box'>
            <div className='FBGRID'>
                <aside>
                    <img src={imagefour} alt='img-four' className= 'image-four' />
                </aside>
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
            </div>`
        </div>
        <footer>
            <img src={logo} alt='logo' className='footer-logo'/>
            {data.map((item, index) => {
                const {page, links} = item;
                return( <ul key={index}>
                    <li className='first-li'>{page}</li>
                    {links.map((link, index) =>{ return <li key={index}>{link}</li>})}
                </ul>
                )
            })}
                
        </footer>
    </div>
    )
}

export default Home;