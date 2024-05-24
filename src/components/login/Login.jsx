import { useState } from 'react'
import './login.css'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../lib/firebase'
import { doc, setDoc } from 'firebase/firestore'
import upload from '../../lib/upload'

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url:""
    })

    const [loading, setLoading] = useState(false)

    // Seteo de imagen para el avatar
    const handleAvatar = (e) => {
        if(e.target.files[0]){
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }
    // Manejo de inicio de sesión de usuario
    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.target)
        const {email, password} = Object.fromEntries(formData)

        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
        finally {
            setLoading(false)
        }
        //toast.success("Test")
    }

    // Manejo de registro de usuario
    const handleRegister = async (e) => {
        e.preventDefault()
        setLoading(true)
        //toast.success("Test")
        const formData = new FormData(e.target)
        const {username, email, password} = Object.fromEntries(formData)
        // console.log(username)

        // Creación de usuario
        try {

            const res = await createUserWithEmailAndPassword(auth, email, password)
            const imgUrl = await upload(avatar.file)

            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                avatar: imgUrl,
                id: res.user.uid,
                blocked:[]
            })

            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: []
            })

            toast.success("Usuario registrado")
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className="login">
            <div className="item">
                <h2>Bienvenido</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Email" name="email" />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                    <button disabled={loading}>{loading ? "Loading": "Ingresar"}</button>
                </form>
            </div>
            <div className="separador"></div>
            <div className="item">
                <h2>Registrate</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor="file">
                        <img src={avatar.url || './avatar.png'} alt="" />
                        Subir imagen
                    </label>
                    <input
                        type="file"
                        id="file"
                        style={{ display: "none" }}
                        onChange={handleAvatar}
                    />
                    <input type="text" placeholder="Username" name="username" />
                    <input type="text" placeholder="Email" name="email" />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                    <button disabled={loading}>{loading ? "Loading": "Registrar"}</button>
                </form>
            </div>
        </div>
    )
}

export default Login