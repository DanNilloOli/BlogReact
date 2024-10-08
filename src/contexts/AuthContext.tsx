import { createContext, ReactNode, useState } from "react"
import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"

interface AuthContextProps{
    usuario: UsuarioLogin
    handleLogin(usuario: UsuarioLogin): Promise<void> 
    handleLogout(): void
    isLoading: boolean
}

interface AuthProviderProps{
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({children}: AuthProviderProps) {

const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
})

const [isLoading, setIsloading] = useState(false);

async function handleLogin(UsuarioLogin: UsuarioLogin){

    setIsloading(true);

    try{

        await login(`/usuarios/logar`, UsuarioLogin, setUsuario);
        alert("Usuário autenticado com sucesso!")

    }catch(error){

        alert("Os dados do usuário estão inconsistentes!")
    }
    setIsloading(false);
}

function handleLogout(){
    setUsuario({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: "",   
    })
}

    return (
        <AuthContext.Provider value={{usuario, handleLogin, handleLogout, isLoading}}>
            {children}
        </AuthContext.Provider>
  )
}

export default AuthContext