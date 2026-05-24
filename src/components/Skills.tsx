function Skills()
{
    const skills=[
        {name:"HTML",value:"100"},
        {name:"CSS",value:"80"},
        {name:"Canva",value:"60"},
        {name:"Figma",value:"40"}
    ]

    return (
        <>
            <div id="3">
            <div className="box">

                <button>Skills</button>

                {
                    skills.map((skill,index)=>
                    (
                        <div key={index}>
                            <p><b>{skill.name}</b></p>
                            <progress value={skill.value} max="100"></progress>
                        </div>
                    ))
                }

            </div>
            </div>
        </>
    )
}

export default Skills