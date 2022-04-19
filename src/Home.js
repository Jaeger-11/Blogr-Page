import React, {useEffect, useState} from 'react';
import { useGlobalContext } from './context';
import data from './data'
import logo from './images/logo.svg';
import imageTwo from './images/illustration-editor-mobile.svg';
import imageThree from './images/illustration-phones.svg';
import imagefour from './images/illustration-laptop-mobile.svg';
// Background images
import deskback from './images/bg-pattern-intro-desktop.svg';
// import mobback from './images'
//Desktop Images
import desklaptop from './images/illustration-laptop-desktop.svg'
import deskeditor from './images/illustration-editor-desktop.svg'

const Home = () => {
    const {closeSubmenu} = useGlobalContext();
    const [width, setWidth] = useState();
    const [desktop, setDesktop] = useState()
    const checkWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() =>{
        checkWidth()
        window.addEventListener('resize', checkWidth)
        if(width > 500){
            setDesktop(true)
        } else{
            setDesktop(false)
        }
        console.log(width, desktop)
        return () => {
            window.removeEventListener('resize', checkWidth)
        }
    }, [width, desktop])

    return(
    <div className='home' onMouseOver={closeSubmenu}>
        <div className='container' >
            <section className='first-section'>
                <h1>A modern publishing platform</h1>
                <p>Grow your audience and build your online brand</p>
                <div>
                    <button className='FSBTN1'>Start For Free</button>
                    <button className='FSBTN2'>Learn More</button>
                </div>
            </section>
        </div>

        <div className='others'>
        <div className='second-box'>
            <h1>Designed for the future</h1>
            <div className='SBGRID'>
                <img src={desktop ? deskeditor : imageTwo} alt='img-two' className='image-two'/>
                
                <section className='second-section'>
                    <article className='SSART'>
                        <h2>Introducing an extensible editor</h2>
                        <p> 
                            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                            videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                            change the looks of a blog.
                        </p>
                    </article>

                    <article className='SSART'>
                        <h2>Robust content management</h2>
                        <p>
                            Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                            by adding customized categories, sections, format, or flow. With this functionality, you are in full control.
                        </p>
                    </article>
                </section>
            </div>
        </div>

        <div className='third-box'>

                <img src={imageThree} alt="img-three" className = 'image-three'/>
                
                <article>
                    <h1>State of the Art Infrastructure</h1>
                    <p>
                    With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                    This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                    </p>
                </article>
        
        </div>
        <div className='fourth-box'>
            <div className='FBGRID'>
                <aside>
                    <img src={desktop ? desklaptop : imagefour} alt='img-four' className= 'image-four' />
                </aside>
                <section>
                    <article>
                        <h2>Free, open, simple</h2>
                        <p>
                        Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                        </p>
                    </article>

                    <article>
                        <h2>Powerful tooling</h2>
                        <p>
                        Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                        capable of producing even the most complicated sites.
                        </p>
                    </article>
                </section>
            </div>
        </div>
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