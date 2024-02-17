import './profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from '../../assets/22cdr089-resume.pdf';
function profile(){
    const openPdf = ()=>{
        const path= resume;
        window.open(path,"_blank");
    }
    return(
        <div className='profile-container' id="pro">
        <div className='profile'>
                <section className='about'>
                    <h4 className='greet'>Hello, This is</h4>
                    <h1 className=' name '>SATHEESH KANNAN</h1>
                    <h3 className='mt-3 greet'>Student & Developer</h3>
                    <p className='greet'>
                     My enthusiasm lies in the pursuit of becoming a software developer focused <br/>on creating impactful solutions for various challenges.
                    </p>
                    <ul className='social mt-4'>
                        <li>
                            <a href='https://github.com/satheesh1022005/' target='_blank' rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                            </a>
                        </li>
                        <li>    
                            <a href='https://www.linkedin.com/in/-satheesh-k/' target='_blank' rel="noreferrer"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-linkedin"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
                            </a>
                        </li>
                        <li>    
                            <a href='mailto:satheesh1022005@gmail.com' target='_blank' rel="noreferrer"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                            </svg>
                            </a>
                        </li>
                    </ul>
                    <button className='resume' onClick={openPdf}>RESUME</button>
                </section>
                <section className='picture'>
                        <div className='shape'>
                        </div>
                </section>
        </div>
        </div>
    );
}
export default profile;