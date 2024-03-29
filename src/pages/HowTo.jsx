import Navigation from "../components/Navigation";

export default function HowTo() {
	return (
		<>
			<div>
				<Navigation />
			</div>
			<div className='px-6 py-24 sm:py-32 lg:px-8'>
				<div className='mx-auto max-w-2xl text-center'>
					<h2 className='text-4xl font-bold tracking-tight dark:text-white text-slate-900 sm:text-6xl'>
						How To Use
					</h2>
					<h2 className='text-4xl font-bold tracking-tight dark:text-white text-slate-900 sm:text-6xl'>
						Science IA Marker
					</h2>
					<p className='mt-6 text-lg leading-8 dark:text-white text-slate-900'>
						Science IA Marker is a tool to streamline the process of marking and
						giving feedback on IAs.
					</p>
					<div className='flex items-center justify-center mt-5'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/TW34BBfGs_U?si=-5nVrDL_A9DoQ00j'
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen></iframe>
					</div>
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
