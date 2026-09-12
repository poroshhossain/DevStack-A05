import MainLogo from '../../../assets/logo-text.png';

const Logo = () => {
  return (
    <a href="/" className="cursor-pointer text-center text-xl w-28 sm:w-32 md:w-36">
      <img className='w-full h-auto' src={MainLogo} alt="logo" />
    </a>
  )
}

export default Logo