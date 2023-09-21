import './index.css'
import {useState} from 'react'
import {Bot} from './components/Bot'
import {data} from './data'
import {MenuItem} from './components/MenuItem';

export let App = () => {

	let [isMobileMenuHidden, setMobileMenuHidden] = useState(true);
	let menuClasses = `
		relative 
		${isMobileMenuHidden ? 
			'h-0 overflow-hidden' : 
			'h-auto'}
		bg-white 
		w-full
		text-myfiol
		flex
		flex-col

		md:h-full 
		md:flex-row 
		md:bg-transparent
		md:gap-2
		md:justify-end

		dark:bg-blue-950
		dark:md:bg-transparent
		`;
	let menuBckg = !isMobileMenuHidden ? `
		top-16
		bg-black/80
		z-10
		w-screen
		h-screen
		fixed` : 

		''
	;
	let bckgClass=`
		pattern-dots 
		pattern-opacity-100 
		pattern-size-4

		pattern-bg-neutral-200 
		dark:pattern-bg-slate-800 

		pattern-white 
		dark:pattern-indigo-900 

		font-josefin 
		dark:text-blue-50 
		${!isMobileMenuHidden ? 'fixed' : ''} 
		`

	return (
	<div className=''>
		<div className={bckgClass}>
				<div className='
					h-16 
					flex 
					justify-between
					drop-shadow-xl 
					max-w-2xl
					my-0
					mx-auto
					relative
					z-10
				'>
					<div className="
						h-full 
						w-24 
						bg-contain 
						bg-no-repeat 
						bg-center 
						bg-[url('./img/logo2.webp')]
						mx-2
					">
					</div>
					<div className={menuBckg}>
						<div className={menuClasses}>
							{[...Array(5)]
								.map((el, idx)=>
								<MenuItem 
									key={idx} 
									title={data[idx].title} 
									onClick={()=>
									setMobileMenuHidden(true)}
								/>)
							}
						</div>
					</div>
					<div className='
						h-full 
						select-none 
						flex 
						justify-center 
						items-center
						mx-2
						relative
						z-30

						md:hidden
					'>
						<span 
							onClick={()=>
								setMobileMenuHidden(e=>!e)} 
							className='
								text-5xl 
								font-bold 
								text-myfiol
								drop-shadow-2xl
								bg-white
								rounded-lg
								px-1
								dark:bg-blue-950
							'>
								≡
						</span>
					</div>
				</div>
				<div className='
					bg-gradient-to-tr 
					from-fuchsia-600 
					dark:from-indigo-950 
					via-pink-700 
					dark:via-black 
					to-fuchsia-600 
					dark:to-indigo-950 
					h-60 
					shadow-[0_1px_1px_1px_rgba(0,0,0,0.6)]  
					flex 
					justify-center 
					items-center
				'>
					<div className='
						text-7xl 
						font-bold
						drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]
						text-blue-50 
						dark:text-indigo-500
					'>
						!who@m¡
					</div>
				</div>
				<div className='
					mt-10
					flex
					flex-col
					gap-y-10
					max-w-2xl
					mx-auto
				'>
					<div className='
						p-3 
						rounded-lg 
						border-solid 
						border-purple-500 
						border 
						shadow-2xl 
						bg-slate-100
						mx-2

						dark:bg-blue-900
					'>
						<b>Hello!</b>
						<br /> 
						This is a page about twitch-bots. 
						Together they form all-in-one tool, 
						cure for boredom for a streamer :)
					</div>

					{[...Array(data.length)]
						.map((el, idx)=>
								<Bot 
									key={idx} 
									title={data[idx].title} 
									descr={data[idx].descr}
									header={data[idx].header} 
									commands={data[idx].commands} 
									img={data[idx].img}
									note={data[idx].note}
									github={data[idx].github} 
									badges={data[idx].badges}
								/>)
					}
				</div>
		</div>
	</div>)
}
