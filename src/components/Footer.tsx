import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='relative flex items-center justify-center flex-col w-full h-20 bg-sky-900 bottom-0'>
			<div className="p-4h-full w-full container mx-auto flex justify-center items-center space-x-6">
		        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
		          <FaInstagram className="text-2xl hover:text-sky-400 transition-colors duration-300" />
		        </a>
		        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
		          <FaFacebookF className="text-2xl hover:text-sky-400 transition-colors duration-300" />
		        </a>
		        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
		          <FaTwitter className="text-2xl hover:text-sky-400 transition-colors duration-300" />
		        </a>
		      </div>
		      <div className="text-center mt-4">
		        &copy; {new Date().getFullYear()} Maybe Your Company. All rights reversed. Reality is unreal.
		      </div>
		</footer>
	);
};

export default Footer;