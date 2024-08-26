import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="bg-indigo-900 flex justify-between text-white px-20">
            <div className="text-xl font-bold">
                <Link to='/home'>Blog Pessoal</Link>
            </div>

            <div>
                
                <ul className="flex *:px-1" >

                        <li>Postagens</li>
                        <li>Tema</li>
                        <li>Cadastrar tema</li>
                        <li>Perfil</li>
                        <li>Sair</li>

                </ul>
            </div>
        </div>
        
)
}

export default Navbar