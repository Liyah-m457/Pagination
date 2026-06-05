import { useState } from 'react'
import Home from './Home'
import About from './Abts'
import Skills from './Skills'
import Projects from './Project'
import Login from './Login'
import Contact from './Contact'
import './Web.css'



function Head()
{
    const [username,setUsername]=useState<string>("")
    
    return (
        <>
        <div style={{ backgroundColor: "#2b0000" }}>
                <section className="img1">
                <img src="inlogo.jpeg"></img>
                <h3><b>Lumio</b></h3>
                <header>
                <a href="#1"><button>Home</button></a>
                <a href="#2"><button>About Us</button></a>
                <a href="#3"><button>Skills</button></a>
                <a href="#4"><button>Projects</button></a>
                <a href="#5"><button>Contact</button></a>
                <a href="#6"><button>Login</button></a>
                </header>
                </section>

                <Home />
                <About username={username}></About>
                <Skills />
                <Projects />
                <Login setUsername={setUsername}></Login>
                <Contact />
       </div> </>
    )
}
export default Head