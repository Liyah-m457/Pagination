import React,{useState} from 'react'

type LoginProps =
{
    setUsername:React.Dispatch<React.SetStateAction<string>>
}

function Login(props:LoginProps)
{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    function HandleSubmit(event:React.FormEvent)
    {
        event.preventDefault();

        if(name=="" || email=="" || password=="")
        {
            alert("All fields should not be empty")
        }
        else
        {
            props.setUsername(name)
            alert("Login Successful")
        }
    }

    return(
        <>  
            <div id="log">
                <button>Login</button>
            </div>

            <div id="6">

            <form onSubmit={HandleSubmit}>

            <div className="form1">

                <h2><b><center>Login in</center></b></h2>

                <table cellSpacing={5} cellPadding={10}>

                <tbody>

                    <tr>
                        <td>
                            <label>Username:</label>
                        </td>

                        <td>
                            <input type="text" onChange={(e)=>setName(e.target.value)} required></input><br></br><br></br>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label>Email:</label>
                        </td>

                        <td>
                            <input type="email" onChange={(e)=>setEmail(e.target.value)} required></input><br></br><br></br>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label>Password:</label>
                        </td>

                        <td>
                            <input type="password" onChange={(e)=>setPassword(e.target.value)} required></input><br></br><br></br>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <button type="submit">Login</button>
                        </td>
                    </tr>

                </tbody>
                </table>

            </div>
            </form>

            </div>
        </>
    )
}

export default Login