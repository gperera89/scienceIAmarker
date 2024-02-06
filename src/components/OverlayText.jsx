import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { updateExportAsText } from "../app/controlSlice";
import Toggle from "./Toggle";
import { bioRubric } from "./bioRubric";
import Button from "./Button";

export default function Overlay() {
	const [buttonName, setButtonName] = useState("Copy to clipboard");
	const exportAsText = useSelector((state) => state.control.exportAsText);
	const criteriaToggle = useSelector((state) => state.control.criteriaToggle);
	const dispatch = useDispatch();
	const handleClose = () => {
		dispatch(updateExportAsText(false));
	};

	const name = useSelector((state) => state.score.name);
	const RDFinal = useSelector((state) => state.score.RDFinal);
	const DAFinal = useSelector((state) => state.score.DAFinal);
	const CoFinal = useSelector((state) => state.score.CoFinal);
	const EvFinal = useSelector((state) => state.score.EvFinal);
	const {
		RD1: RD1state,
		RD2: RD2state,
		RD3: RD3state,
		DA1: DA1state,
		DA2: DA2state,
		DA3: DA3state,
		Co1: Co1state,
		Co2: Co2state,
		Ev1: Ev1state,
		Ev2: Ev2state,
		RDC: RDCstate,
		DAC: DACstate,
		CoC: CoCstate,
		EvC: EvCstate,
	} = useSelector((state) => state.score);

	const finalScore = RDFinal + DAFinal + CoFinal + EvFinal;

	const gradeLookup = [
		1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7,
	];

	let finalGrade = gradeLookup[finalScore];

	function copyToClipboard() {
		const textToCopy = document.querySelector(".copy-to-clipboard").innerText;
		navigator.clipboard.writeText(textToCopy).then(
			function () {
				setButtonName("Copied!");
				setTimeout(() => setButtonName("Copy to clipboard"), 5000); // Reset after 5 seconds
			},
			function (err) {
				console.error("Could not copy text: ", err);
			}
		);
	}
	return (
		<Transition.Root show={exportAsText} as={Fragment}>
			<Dialog as='div' className='relative z-10' onClose={handleClose}>
				<div className='fixed inset-0' />
				<div className='fixed inset-0 overflow-hidden'>
					<div className='absolute inset-0 overflow-hidden'>
						<div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
							<Transition.Child
								as={Fragment}
								enter='transform transition ease-in-out duration-500 sm:duration-700'
								enterFrom='translate-x-full'
								enterTo='translate-x-0'
								leave='transform transition ease-in-out duration-500 sm:duration-700'
								leaveFrom='translate-x-0'
								leaveTo='translate-x-full'>
								<Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
									<div className='flex h-full flex-col overflow-y-scroll bg-white dark:bg-slate-950 shadow-xl'>
										<div className='bg-[#0047AB] dark:bg-[#4682B4] px-4 py-6 sm:px-6'>
											<div className='flex items-center justify-between'>
												<Dialog.Title className='text-base font-semibold leading-6 text-white'>
													{name === ""
														? "Internal Assessment Results"
														: `Internal Assessment Results of ${name}`}
												</Dialog.Title>
												<div className='ml-3 flex h-7 items-center'>
													<button
														type='button'
														className='relative rounded-md bg-[#0047AB] dark:bg-[#4682B4] text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
														onClick={() => {
															handleClose();
														}}>
														<span className='absolute -inset-2.5' />
														<span className='sr-only'>Close panel</span>
														<XMarkIcon className='h-6 w-6' aria-hidden='true' />
													</button>
												</div>
											</div>
											<div className='flex justify-between'>
												<div className='mt-5'>
													<Toggle />
												</div>
												<div className='mt-4 mr-10'>
													<Button
														onClick={copyToClipboard}
														buttonName={buttonName}
													/>
												</div>
											</div>
										</div>
										<div className='relative flex-1 px-4 py-6 sm:px-6'>
											<div className='copy-to-clipboard text-slate-900 dark:text-white'>
												{" "}
												<div className='mt-1'>
													<p className='font-semibold'>
														Overall Score: {finalScore}
													</p>
													<p className='font-semibold'>
														Overall Grade: {finalGrade}
													</p>
													<br />
												</div>
												<p className='font-semibold'>
													Score for Research Design: {RDFinal}
												</p>
												<p className='font-medium'>
													Research Question:{" "}
													{criteriaToggle
														? bioRubric["Research Question"][RD1state]
														: RD1state}
												</p>
												<p className='font-medium'>
													Method Validity:{" "}
													{criteriaToggle
														? bioRubric["Method Validity"][RD2state]
														: RD2state}
												</p>
												<p className='font-medium'>
													Method Reliability:{" "}
													{criteriaToggle
														? bioRubric["Method Reliability"][RD3state]
														: RD3state}
												</p>
												<p className='font-medium'>Comment: {RDCstate}</p>
												<br />
												<p className='font-semibold'>
													Score for Data Analysis: {DAFinal}
												</p>
												<p className='font-medium'>
													Clarity:{" "}
													{criteriaToggle
														? bioRubric["Clarity"][DA1state]
														: DA1state}
												</p>
												<p className='font-medium'>
													Uncertainty:{" "}
													{criteriaToggle
														? bioRubric["Uncertainty"][DA2state]
														: DA2state}
												</p>
												<p className='font-medium'>
													Processing:{" "}
													{criteriaToggle
														? bioRubric["Processing"][DA3state]
														: DA3state}
												</p>
												<p className='font-medium'>Comment: {DACstate}</p>
												<br />
												<p className='font-semibold'>
													Score for Conclusion: {CoFinal}
												</p>
												<p className='font-medium'>
													Justification:{" "}
													{criteriaToggle
														? bioRubric["Justification"][Co1state]
														: Co1state}
												</p>
												<p className='font-medium'>
													Scientific Context:{" "}
													{criteriaToggle
														? bioRubric["Scientific Context"][Co2state]
														: Co2state}
												</p>
												<p className='font-medium'>Comment: {CoCstate}</p>
												<br />
												<p className='font-semibold'>
													Score for Evaluation: {EvFinal}
												</p>
												<p className='font-medium'>
													Limitations:{" "}
													{criteriaToggle
														? bioRubric["Limitations"][Ev1state]
														: Ev1state}{" "}
												</p>
												<p className='font-medium'>
													Improvements:{" "}
													{criteriaToggle
														? bioRubric["Improvements"][Ev2state]
														: Ev2state}
												</p>
												<p className='font-medium'>Comment: {EvCstate}</p>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
