import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';
import React,{useEffect,useState} from 'react';
import sb1 from '../../assets/sb1.jpg';
import sb2 from '../../assets/sb2.jpg';
import sb3 from '../../assets/sb3.jpg';
import sb4 from '../../assets/sb4.jpg';
import sb5 from '../../assets/sb5.jpg';
import sb6 from '../../assets/sb6.jpg';
import resume from '../../assets/22cdr089-resume.pdf';
function About(){
  const openPdf = ()=>{
    const path= resume;
    window.open(path,"_blank"); 
}
    const images = [sb1, sb2, sb3, sb4, sb5, sb6];
    const dialog = [
      "Hi, I'm Satheesh. My journey in computer started in 6th grade, thanks to my mom enrolling me in a class.",
      "From 6th to 8th grade, I completed courses like DCA, HDCA, TM, DHM, and Tally.",
      "In 8th grade, I secured third place in a district-level computer exam.",
      "In 12th grade, I ranked second in school.",
      "After high school, I'm pursuing a degree in Computer Science and Design at Kongu Engineering College.",
      "Now, I'm on the path to becoming a developer."
  ];
      
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

    return(
            <div className='self' id="about">
                <section>
                <h3 className='mt-5'>About me</h3>
                <p className='text-info'>A small introduction about myself</p>
                </section>
                <div className='self-content'>
                <div className='w-75 self-intro'>
                    <h2>SATHEESH K</h2>
                    <p>Aspiring Software Developer</p>
                    <p className='objective'>
                    I am SATHEESH, currently pursuing a degree in computer science and design at Kongu Engineering College.I am an aspiring software developer with a strong passion for learning and solving real-world problemsthrough technology.I am consistently eager to acquire new knowledge and stay updated on emergingtechnologies. If you are interested in exploring my coding projects and accomplishments, you can find themon my 
                      <a href='https://github.com/satheesh1022005/' target='_blank' rel="noreferrer">
                       <em><b> GitHub</b></em>
                      </a> and 
                      <a href='https://www.linkedin.com/in/-satheesh-k/' target='_blank' rel="noreferrer"> 
                      <em><b> linkedin </b></em>
                      </a> profiles. Moreover, I am open to collaboration opportunities with fellow enthusiastsin the field.
                    </p>
                    <button onClick={openPdf}>RESUME</button>
                    <a href='mailto:satheesh1022005@gmail.com' target='_blank' rel="noreferrer"> 
                    <button >HIRE ME</button>
                    </a>
                </div>
                <div className='storyboard-container'>
                        <h6>A short story of my life</h6>
                        <div className='storyboard'>
                        <img
                             src={images[currentIndex]}
                            alt={`slideshow-${currentIndex}`}/>
                    
                        </div>
                            <figcaption className='dialog'>{dialog[currentIndex]}</figcaption>
                </div>
                </div>
                
            </div>
    );
    
}
export default About;