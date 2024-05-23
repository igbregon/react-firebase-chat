import { useState } from 'react'
import './login.css'
import { toast } from 'react-toastify'

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url:""
    })

    const handleAvatar = (e) => {
        if(e.target.files[0]){
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleLogin = (e) => {
        e.preventDefault()
        toast.success("Test")
    }

  return (
    <div className='login'>
        <div className="item">
            <h2>Bienvenido</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button>Ingresar</button>
            </form>
        </div>
        <div className="separador"></div>
        <div className="item">
        <h2>Registrate</h2>
            <form action="">
                <label htmlFor="file">
                    <img src={avatar.url || "./avatar.png"} alt="" />
                    Subir imagen
                </label>
                <input type="file" id='file' style={{display:"none"}} onChange={handleAvatar}/>
                <input type="text" placeholder="Username" name="username" />
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button>Registrar</button>
            </form>
        </div>
    </div>
  )
}

export default Login