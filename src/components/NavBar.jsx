import { FaGithub, FaLinkedin } from "react-icons/fa"
import logo from "../assets/logo.png"

const NavBar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'  >
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="logo" width={48} height={48} className="rounded-full mx-2 w-25"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://github.com/CertifiedDepressedBoy"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/kaung-phyo-thant-926160338/"><FaLinkedin/></a>
        </div>
    </nav>
  )
}

export default NavBar
