import './projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import js from '../../assets/js.svg'
import react from '../../assets/react.svg'
import bootstrap from '../../assets/bootstrap.svg'
import git from '../../assets/git.svg'
import c from '../../assets/c.svg'
import java from '../../assets/java.svg'
import eco_saver from '../../assets/ecosaver.jpeg'
import { useState } from 'react';
function Projects(){
    const projectsData = [
        {
          name: 'Eco_Saver',
          description: 'Created an app to save money by managing electricity use, promoting eco-friendly habits with practical tips for efficient electricity usage.',
          techStack: [{
            stack:"#react",
            color:"text-success"
          },
          {
            stack:"#arduino",
            color:"text-info"
          },{
            stack:"#python",
            color:"text-danger"
          }],
          githubLink: 'https://github.com/satheesh1022005/eco_saver/tree/gh-pages',
          image: eco_saver,
          about:"The electricity conservation mobile app minimizes expenses and environmental impact, utilizing digital energy meters for real-time usage data. It educates users on efficient appliance usage through global best practices, offering suggestions for optimal times to meet monthly targets. The 'Streak Society' gamified feature fosters friendly competition through leaderboards, enhancing engagement. This app aims to empower users with knowledge for responsible electricity consumption, contributing to a more sustainable future.",
        },
        // Add more projects as needed
      ];
      const [isFlippedArray, setIsFlippedArray] = useState(Array(projectsData.length).fill(false));
      const handleFlip = (index) => {
        const newIsFlippedArray = [...isFlippedArray];
        newIsFlippedArray[index] = !newIsFlippedArray[index];
        setIsFlippedArray(newIsFlippedArray);
      };
    return(
        <div className='projects-container' id="project">
            <div className='projects'>
                <section className='skills'>
                <h3>Skills</h3>
                <p className='text-info'>I can say i'm quite good at</p>
                </section>
                <section className='skills-logo'>
                    <img src={html} alt='html'/>
                    <img src={css} alt='css'/>
                    <img src={js} alt='js'/>
                    <img src={bootstrap} alt='bootstrap'/>
                    <img src={react} alt='react'/>
                    <img src={git} alt='git'/>
                    <img src={java} alt='java'/>
                    <img src={c} alt='c'/>    
                </section>
                <section className='project-introduction'>
                    <h1>Projects</h1>
                    <p>
Highlighted here are a projects that give a peek into my skills and hands-on experience. <b><em>I've provided concise descriptions for each project, along with handy links to code repositories.</em></b> These examples not only showcase my proficiency in solving real-world problems but also underscore my adeptness with diverse technologies. Furthermore, they attest to my project management skills, illustrating my ability to navigate and lead successfully in various scenarios. These projects collectively serve as a testament to my practical expertise and commitment to delivering effective solutions.</p>
                </section>
                <section className='project-card-container'>
                        {projectsData.map((project,index)=>(
                            <div className='project-grid' key={index}>
                                <div className= {`grid-content ${isFlippedArray[index] ? 'flipped' : ''}`}>
                                {/*'flipped grid-content' > */}
                                        <div className='grid-front'>
                                            <section className='project-img'>
                                                <a className='github-code' href={project.githubLink} target="_blank" rel='noreferrer'>
                                                <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle color-fg-default">
                                                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                                                </svg>
                                                </a>
                                                <img src={project.image} alt='eco_saver'/>
                                                </section>    
                                            <section className='project-description'>
                                                <h4>{project.name}</h4>
                                                <p>{project.description}</p>
                                                <p>
                                                {project.techStack.map((stack,index)=>(
                                                    <span className={stack.color} key={index}>{stack.stack} </span>
                                                ))}
                                                </p>
                                                <div className='i-button' onClick={()=>{handleFlip(index)}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" className="bi bi-info-circle-fill " viewBox="0 0 16 16">
                                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                                                </svg>
                                                </div>
                                            </section>
                                        </div>
                                        <div className='grid-back' onClick={()=>{handleFlip(index)}}>
                                            <h5>About</h5>
                                            <p className='scrollable-content'>
                                                {project.about}
                                            </p>
                                        </div>
                                </div>
                            </div>
                       
                        ))}
                    
                </section>
            </div>
        </div>
    );
}
export default Projects;