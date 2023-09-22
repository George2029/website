import './index.css'
import {useState} from 'react'
import {Bot} from './components/Bot'
import {data} from './data'
import {MenuItem} from './components/MenuItem';

export let App = () => {

	let [isMobileMenuHidden, setMobileMenuHidden] = useState(true);
	let [theme, setTheme] = useState('light');
	let menuClasses = `
		${isMobileMenuHidden ? 
			'h-0 overflow-hidden' : 
			'fixed w-4/5 left-4 top-16 p-3'}
		bg-white 
		rounded-xl
		text-myfiol
		flex
		flex-col
		items-center

		md:h-full 
		md:flex-row 
		md:gap-2
		md:justify-end

		dark:bg-blue-950
		md:bg-transparent
		dark:md:bg-transparent
	`;

	let menuBckg =  `
		bg-black/80
		z-10
		w-screen
		h-screen
		fixed
		${isMobileMenuHidden ? 'hidden' : ''}
	`;

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

	if (localStorage.getItem('theme') === 'dark') {
		if (theme !== 'dark') setTheme('dark');
	} else if (localStorage.getItem('theme') === 'light') {
		if (theme !== 'light') setTheme('light');
	} else {
		if(window.matchMedia('(prefers-color-scheme: dark)').matches ) {
			if (theme !== 'dark') setTheme('dark');
		} else {
			if (theme !== 'light') setTheme('light');
		}
	}
	
	return (
	<div className={theme}>
		<div className={bckgClass}>
				<div className={menuBckg}></div>
				<div className='
					h-16 
					flex 
					justify-between
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
						bg-[url('./img/logo.webp')]
						mx-2
						relative
					">
					</div>
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
						<div className='
							mt-4 
							flex 
							pt-4 
							w-full 
							border-t 
							gap-1
							items-center
							justify-center
							border-myfiol
							md:border-0
							md:pt-0
							md:mt-0
						'>
							<svg xmlns="http://www.w3.org/2000/svg" 
								fill={theme === 'light' ? '#FFFF00' : ''}  
								viewBox="0 0 24 24" 
								strokeWidth={1.5} 
								stroke="currentColor" 
								className="w-7 h-7">
  								<path strokeLinecap="round" 
									strokeLinejoin="round" 
									d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 
										18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 
											12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
							</svg>
		
							<div className='toggle flex items-center'>
								<input type="checkbox" checked={theme==='dark'} 
									id="toggle" />
								<label htmlFor="toggle" onClick={()=>setTheme(theme=>{
									if (theme === 'light') {
										localStorage.setItem('theme', 'dark');
										setTheme('dark');
										return 'dark';
									} else {
										localStorage.setItem('theme', 'light');
										setTheme('light');
										return 'light';
									}
								})} />
							</div>
							<svg xmlns="http://www.w3.org/2000/svg" 
								fill={theme === 'dark' ? '#FFFF00' : ''}  
								viewBox="0 0 24 24" 
								strokeWidth={1.5} 
								stroke="currentColor" 
								className="w-7 h-7">
  								<path strokeLinecap="round" 
									strokeLinejoin="round" 
									d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 
										0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 
										12.75 21a9.753 9.753 0 009.002-5.998z" />
							</svg>
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
