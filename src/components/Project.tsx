function Projects()
{
    const projects=[
        {title:"Brand Before Buy",description:"Fashion entrepreneurial platform."},
        {title:"IOT Project",description:"A smart rainwater harvesting system."},
        {title:"College Event Management",description:"Implementation of Database Management System with MySQL application."},
        {title:"Paradise Pathway",description:"Airline ticket swapping and booking system."}
    ]

    return(
        <>
            
            <div id="4">
            <button>Projects</button>   

            <div id="project-container">

                {
                    projects.map((project,index)=>
                    (
                        <div className="project-card" key={index}>
                            <h2><b>{project.title}</b></h2>
                            <p>{project.description}</p>
                        </div>
                    ))
                }

            </div>
            </div>
        </>
    )
}

export default Projects