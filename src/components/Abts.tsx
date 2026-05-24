type AboutProps =
 {
    username:string
 }
function About(props:AboutProps)
{
    return(
        <section id="2">
            <button>About Us</button>
           <p>Myself liyah who loves to design websites using tools like Figma and Canva. I love to write poetry and create contents on instagram.</p>
        <div className="prf">
            <img src="/avatar.jpeg"></img>
            <p><center>Welcome {props.username}!</center></p>
        </div>
        <hr></hr>
        </section>
    )
}
export default About