import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div className="mx-auto w-screen">
			<aside className="relative w-screen overflow-hidden text-black rounded-lg sm:px-16 sm:py-6">
				<div className="relative w-full flex items-center justify-between max-sm:flex-col max-sm:p-0 z-10 max-w-screen-xl pb-20 pt-10  mx-auto ">
					<div className="max-sm:w-full w-1/2 sm:mt-1 mt-80 max-sm:mt-10 text-center flex max-sm:flex-col max-sm:items-center flex-col">
						<p className="text-6xl max-sm:text-4xl max-sm:text-center font-bold text-left">
							Trust me, your <br /> diet doesn’t <br /> have to be boring.
						</p>
						<p className="text-xl font-extralight text-left py-6 pr-32 max-sm:px-10 max-sm:text-base max-sm:text-center">
							A healthy diet provides the body with essential nutrition: fluid,
							macronutrients, micronutrients, and adequate calories.
						</p>

						<button className="px-6 hover:bg-[#03A768] bg-slate-300 border-1 hover:text-gray-100 text-base max-sm:text-center w-fit text-left rounded-full max-sm:py-2 max-sm:px-6  max-sm:text-sm py-3 max-sm:mb-5">
							Check how can i help you
						</button>
					</div>
					<div className="w-1/2 h-full max-sm:w-full max-sm:p-6 max-sm:mb-3">
						<img
							className="w-full"
							src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="image1"
						/>
					</div>
				</div>
			</aside>

			<div className="w-full flex items-center justify-around place-items-center">
				<div className="flex w-2/3 max-sm:w-fit max-sm:px-0 max-sm:flex-col max-sm:items-center justify-between px-10 py-10 bg-slate-200 rounded-2xl">
					<div className="p-4 text-center rounded-md w-fit">
						<h2 className="text-4xl mb-2 font-semibold">14</h2>
						<p className="text-sm">YEARS EXPERIENCE</p>
					</div>
					<div className="p-4 text-center rounded-md w-fit">
						<h2 className="text-4xl mb-2 font-semibold">560</h2>
						<p className="text-sm">SATISFIED CUSTOMER</p>
					</div>
					<div className="p-4 text-center rounded-md w-fit">
						<h2 className="text-4xl mb-2 font-semibold">14</h2>
						<p className="text-sm">YEARS EXPERIENCE</p>
					</div>
				</div>
			</div>

			<div className="h-screen max-sm:h-fit max-sm:flex-col max-sm:items-center w-full flex text-2xl sm:text-5xl py-10 sm:px-16">
				<div className="left w-1/2 max-sm:w-full max-sm:p-6 flex items-center justify-center">
					<div className="w-[300px] max-sm:w-full h-fit overflow-hidden">
						<img
							className="w-full max-sm:w-full l h-full object-contain"
							src="https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpZXR8ZW58MHx8MHx8fDA%3D"
							alt=""
						/>
					</div>
				</div>
				<div className="right w-1/2 max-sm:w-full max-sm:px-6 leading-6 text-lg font-extralight py-10 flex flex-col max-sm:flex-col gap-5 items-start justify-center">
					<h1 className="text-5xl font-medium">About Us</h1>
					<p>
						Welcome to{' '}
						<span className="font-semibold"> Mr. Atul Tiwari Ji </span>
						Nutrition!
					</p>
					<p>
						We are passionate about empowering you to achieve your health and
						wellness goals through personalized nutrition guidance. With a focus
						on evidence-based practices and a compassionate approach, we are
						here to support you on your journey to optimal health.
					</p>
					<p>
						Our team of experienced dietitians understands that every individual
						is unique, which is why we tailor our recommendations to suit your
						specific needs and lifestyle. Whether you’re looking to manage a
						medical condition, improve athletic performance, or simply adopt
						healthier eating habits, we’re here to provide expert guidance and
						support every step of the way.
					</p>
					<p>
						At <span className="font-semibold"> Mr. Atul Tiwari Ji </span>
						Nutrition, we believe that food is medicine, and we’re committed to
						helping you harness the power of nutrition to live your best life.
						Get started on your path to wellness today!
					</p>
					<a target="_blank" href="https://wa.me/+917805806867">
						<button className="px-14 py-2 text-white flex items-center gap-4 rounded-full bg-blue-700">
							<p className="text-3xl">✆</p> Contact Now
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}
