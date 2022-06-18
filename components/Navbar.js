import Image from 'next/image'

import hashgreenLogo from '../public/hashgreen-logo.png'

const Navbar = () => {
  return (
    <nav id="navbar" className='bg-white shadow-lg px-5 py-3.5'>
      <div className="logo">
        <Image
          src={ hashgreenLogo }
          width={ 211 }
          height={ 40 }
        />
      </div>
    </nav>
  );
}

export default Navbar;