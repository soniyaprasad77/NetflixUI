import { LOGO } from "../utils/constants";

const Footer = () => {
  return (
    <footer className='w-full bg-black text-white py-6'>
      <div className='flex justify-center mb-4'>
        <img className='h-12 md:h-16' src={LOGO} alt='blockbuster logo' />
      </div>

      <div className='flex flex-col items-center space-y-2 md:flex-row md:justify-center md:space-y-0 md:space-x-6 text-sm mb-4'>
        <a
          href='https://github.com/soniyaprasad77'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline'
        >
          Terms and Privacy Notice
        </a>
        <a
          href='https://www.linkedin.com/in/soniyaprasad/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline'
        >
          Send us feedback
        </a>
        <a
          href='https://x.com/soniyadotprasad'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline'
        >
          Help
        </a>
      </div>

      <div className='flex justify-center text-sm text-gray-400'>
        <span>© 2024, Blockbuster, Inc. or its affiliates</span>
      </div>
    </footer>
  );
};

export default Footer;
