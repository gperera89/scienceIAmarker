import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
	{ name: "App", href: "/" },
	{ name: "How to Use", href: "/how-to" },
	{ name: "Contact", href: "/contact" },
];

export default function Example() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className='bg-white dark:bg-slate-900'>
			<nav
				className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
				aria-label='Global'>
				<div className='flex flex-1'>
					<div className='hidden lg:flex lg:gap-x-12'>
						{navigation.map((item) => (
							<Link
								key={item.name}
								to={item.href}
								className='text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:font-bold'>
								{item.name}
							</Link>
						))}
					</div>
					<div className='flex lg:hidden'>
						<button
							type='button'
							className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-900 dark:text-white'
							onClick={() => setMobileMenuOpen(true)}>
							<span className='sr-only'>Open main menu</span>
							<Bars3Icon
								className='h-6 w-6'
								aria-hidden='false'
								aria-label='Menu'
							/>{" "}
						</button>
					</div>
				</div>
				<a href='/' className='-m-1.5 p-1.5'>
					<span className='sr-only'>Science IA Marker</span>
					<img
						className='h-10 w-10'
						src='/logo192.webp'
						alt='Science IA Marker Logo'
					/>
				</a>
				<div className='flex flex-1 justify-end'>
					<a
						href='https://xmltwo.ibo.org/publications/DP/Group4/d_4_biolo_gui_2302_1/dp_biology_IA_criteria_en.pdf'
						target='_blank'
						rel='noopener noreferrer'
						className='text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:font-bold'>
						IA Criteria
					</a>
				</div>
			</nav>
			<Dialog
				as='div'
				className='lg:hidden'
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}>
				<div className='fixed inset-0 z-10' />
				<Dialog.Panel className='fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white dark:bg-slate-900 px-6 py-6'>
					<div className='flex items-center justify-between'>
						<div className='flex flex-1'>
							<button
								type='button'
								className='-m-2.5 rounded-md p-2.5 text-gray-700'
								onClick={() => setMobileMenuOpen(false)}>
								<span className='sr-only'>Close menu</span>
								<XMarkIcon className='h-6 w-6' aria-hidden='true' />
							</button>
						</div>
						<a href='/' className='-m-1.5 p-1.5'>
							<span className='sr-only'>Science IA Marker</span>
							<img
								className='h-10 w-auto'
								src='/logo192.png'
								alt='Science IA Marker Logo'
							/>
						</a>
						<div className='flex flex-1 justify-end'>
							<a
								href='https://xmltwo.ibo.org/publications/DP/Group4/d_4_biolo_gui_2302_1/dp_biology_IA_criteria_en.pdf'
								target='_blank'
								rel='noopener noreferrer'
								className='text-sm font-semibold leading-6 text-gray-900 hover:font-bold'>
								IA Criteria
							</a>
						</div>
					</div>
					<div className='mt-6 space-y-2'>
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:font-bold dark:text-white hover:slate-900 '>
								{item.name}
							</a>
						))}
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
