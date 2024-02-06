import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { updateExportAsTable } from "../app/controlSlice";
import Button from "./Button";
import { useRef } from "react";

export default function OverlayTable() {
	const tableRef = useRef();
	const [buttonName, setButtonName] = useState("Copy to clipboard");
	const exportAsTable = useSelector((state) => state.control.exportAsTable);
	const dispatch = useDispatch();
	const handleClose = () => {
		dispatch(updateExportAsTable(false));
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

	const copyToClipboard = () => {
		const range = document.createRange();
		range.selectNodeContents(tableRef.current);
		const selection = window.getSelection();
		selection.removeAllRanges();
		selection.addRange(range);

		const successful = document.execCommand("copy");
		selection.removeAllRanges();

		if (successful) {
			setButtonName("Copied!");
			setTimeout(() => setButtonName("Copy to clipboard"), 5000); // Reset after 5 seconds
		} else {
			console.error("Could not copy text");
		}
	};

	return (
		<Transition.Root show={exportAsTable} as={Fragment}>
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
												<div className='mt-4 mr-10'>
													<Button
														buttonName={buttonName}
														onClick={copyToClipboard}
													/>
												</div>
											</div>
										</div>
										<div className='relative flex-1 px-4 py-6 sm:px-6'>
											<div className='copy-to-clipboard text-slate-900 dark:text-white '>
												<div className='overflow-auto'>
													<table ref={tableRef} className='min-w-max'>
														<tr>
															<th></th>
															<th className='p-2'>Research Design</th>
															<th className='p-2'>Data Analysis</th>
															<th className='p-2'>Conclusion</th>
															<th className='p-2'>Evaluation</th>
														</tr>
														<tr>
															<th></th>
															<td className='p-2'>RQ: {RD1state}</td>
															<td className='p-2'>CP: {DA1state}</td>
															<td className='p-2'>Ju: {Co1state}</td>
															<td className='p-2'>WL: {Ev1state}</td>
														</tr>
														<tr>
															<th></th>
															<td className='p-2'>MC: {RD2state}</td>
															<td className='p-2'>CU: {DA2state}</td>
															<td className='p-2'>SC: {Co2state}</td>
															<td className='p-2'>Im: {Ev2state}</td>
														</tr>
														<tr>
															<th></th>
															<td className='p-2'>DM: {RD3state}</td>
															<td className='p-2'>DP: {DA3state}</td>
															<td></td>
															<td></td>
														</tr>
														<tr>
															<th className='p-2'>Comments</th>
															<td className='p-2'>{RDCstate}</td>
															<td className='p-2'>{DACstate}</td>
															<td className='p-2'>{CoCstate}</td>
															<td className='p-2'>{EvCstate}</td>
														</tr>
														<tr>
															<th>Score</th>
															<td className='p-2'>{RDFinal}</td>
															<td className='p-2'>{DAFinal}</td>
															<td className='p-2'>{CoFinal}</td>
															<td className='p-2'>{EvFinal}</td>
														</tr>
														<tr>
															<th className='p-2'>Overall Score</th>
															<td colSpan='4' className='p-2'>
																{finalScore}
															</td>
														</tr>
														<tr>
															<th className='p-2'>Overall Grade</th>
															<td colSpan='4' className='p-2'>
																{finalGrade}
															</td>
														</tr>
													</table>
												</div>
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
