import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

function Footer() {

    let data = new Date().getFullYear()


    return (
        <div className="bg-indigo-900 flex justify-center text-white py-8 text-center">
            <div className="text-xl-3">
                <p className="font-bold">Blog Pessoal Generation | Copyright: {data}</p>
                <p className="font-thin">Acesse nossas redes sociais</p>
                <div className="flex justify-center gap-2">
                    <a href="https://github.com/lidskey" aria-label="Github" rel="noopener"> 
                        <GithubLogo size={34} weight="bold" />
                    </a>
                    <a href="https://www.linkedin.com/in/liara-cristina-939313128/" aria-label="Linkedin" rel="noopener">
                        <LinkedinLogo size={34} weight="bold" />
                    </a>
                </div>
            </div>
        </div>

          
)
}
export default Footer