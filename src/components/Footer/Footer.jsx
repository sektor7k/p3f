import { Link } from 'react-router-dom'
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
const Footer = () => {
  const date = new Date;
  const year = date.getFullYear();
  return (
    <div className="bg-[#0b0b0b] text-sm w-[100%] mt-[10rem]">

      <div className="mb-10 w-[90%] grid gap-2 md:gap-4 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-[auto] items-start justify-items-center">

        <div data-aos="fade-up" className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-1 md:order-1 lg:order-1'>

          <Link to="/">
            <img src="/images/logo4.png" alt="logo" className='h-14 mb-2 w-auto' />
          </Link>

          <p className='max-w-[17rem] py-3 text-base'>Onchain gaming project on the Starknet chain</p>
          <div className='flex gap-3 py-2 '>
            <a style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" href="#" >
              <FaInstagram className='transition ease-in delay-50 text-pink-500 visited:text-pink-500 hover:text-pink-600 hover:scale-[110%]' size={30} />
            </a>
            <a style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" href="#" >
              <FaLinkedinIn className='transition ease-in delay-50 text-blue-500 visited:text-blue-500 hover:text-blue-600 hover:scale-[110%]' size={30} />
            </a>
            <a style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" href="https://twitter.com/project3fusion" >
              <FaTwitter className='transition ease-in delay-50 text-sky-500 visited:text-sky-500 hover:text-sky-600 hover:scale-[110%]' size={30} />
            </a>
          </div>
        </div>

        <div data-aos="fade-up" className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-2 md:order-2 lg:order-2'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-semibold'>Useful Links</h1></div>
          <ul className='mt-4 flex flex-col gap-2 text-base'>
            <li className=' hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/about"><p className='text-gray-400 hover:text-sky-500'>About</p></Link></li>
            <li className=' hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/team"><p className='text-gray-400 hover:text-sky-500'>Team</p></Link></li>
            <li className=' hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="https://project-3-fusion.gitbook.io/project-3-fusion/" target="_blank" rel="noopener noreferrer" ><p className='text-gray-400 hover:text-sky-500'>Docs</p></Link></li>
          </ul>
        </div>

        <div data-aos="fade-up" className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-3 md:order-3 lg:order-3 text-base'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-semibold'>Contact Us</h1></div>
          <p className='max-w-[16rem] pt-4 text'>Manisa/Turkey</p>
          <p className='pt-2'>Mail : <a style={{ textDecoration: "none" }} href="mailto:games@castrum.istanbul" className='text-blue-700 ml-2 font-semibold'><span className='hover:text-gray-400 text-sky-500'>games@castrum.istanbul</span></a></p>
        </div>

      </div>

      <div className="w-[90%] m-[auto] bg-gray-800 h-[1px]"></div>
      <div className="m-[auto] pb-8 pt-5 text-gray-600 font-medium text-sm flex flex-col md:flex-row lg:flex-row justify-between items-center w-[90%]">
        <p>
          © {year} Project 3 Fusion.
        </p>
        
      </div>
    </div>
  )
}

export default Footer
