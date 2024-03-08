import Navigation from "../components/Navigation";

export default function Contact() {
	return (
		<>
			<div>
				<Navigation />
			</div>
			<div className='px-6 py-24 sm:py-32 lg:px-8'>
				<div className='mx-auto max-w-2xl text-center'>
					<h2 className='text-4xl font-bold tracking-tight text-slate-900  dark:text-white sm:text-6xl'>
						Contact
					</h2>
					<p className='mt-6 text-lg leading-8 text-slate-900  dark:text-white'>
						If you have any questions, suggestions, or would just like to
						connect, please reach out to me via email or through my social
						media. I&apos;d love to hear from you!
					</p>
					<p className='mt-6 text-lg leading-8 text-slate-900  dark:text-white'>
						GP
					</p>
				</div>
			</div>
			<div>
				<div className='flex justify-center space-x-4 '>
					<a
						href='https://www.linkedin.com/in/gayan-perera-b792731b2/'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							className='w-10 h-10 transform transition duration-500 ease-in-out hover:scale-110'
							src='/LinkedIn.png'
							alt='LinkedIn'
						/>
					</a>
					<a href='mailto:g.perera26@gmail.com'>
						<img
							className='w-10 h-10 transform transition duration-500 ease-in-out hover:scale-110'
							src='/Gmail.png'
							alt='Gmail'
						/>
					</a>
					<a
						href='https://github.com/gperera89'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							className='w-10 h-10 transform transition duration-500 ease-in-out hover:scale-110 dark:bg-white'
							src='/Github.png '
							alt='GitHub'
						/>
					</a>
					<a
						href='https://www.instagram.com/gperera26?igsh=eDZ6dmIwMzBnc3R3&utm_source=qr'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							className='w-10 h-10 transform transition duration-500 ease-in-out hover:scale-110'
							src='/Instagram.png'
							alt='Instagram'
						/>
					</a>
				</div>
			</div>
		</>
	);
}
