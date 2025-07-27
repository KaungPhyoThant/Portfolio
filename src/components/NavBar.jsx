import { FaGithub, FaLinkedin } from "react-icons/fa"

const NavBar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-end py-6'>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://github.com/KaungPhyoThant"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/kaung-phyo-thant-926160338/"><FaLinkedin/></a>
        </div>
    </nav>
  )
}

export default NavBar
