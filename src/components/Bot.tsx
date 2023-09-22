import githubPng from './../img/github.webp';
import {Command} from './Command';

export const Bot = ({title, descr, header, commands, img, note, badges, github} : Bot ) => 
 	<div className='mt-4 m-1'>
		<div className='
			h-12 
			text-center 
			text-myfiol 
			text-3xl 
			drop-shadow-lg
		' id={title}>
			{title}
		</div>
		<div className='mt-2 text-center'>
			<b>{header}</b>
		</div>
		<div className='mt-2'>
			<img className='
				mx-auto 
				drop-shadow-2xl
				border
				rounded-lg
				border-solid
				border-myfiol
			' 
				src={img} 
				alt="" 
			/>
		</div>
		<div className='
			m-2 
			p-2 
			bg-slate-200 
			drop-shadow-lg 
			rounded-lg
			border-myfiol
			border
			dark:bg-slate-800
		'>
			{descr}
		</div>
		<div className='mt-2'>
			{
				commands.map((cmd, idx)=>
				<Command 
					key={idx} 
					title={cmd.title} 
					header={cmd.header} 
					synopsis={cmd.synopsis} 
					badges={cmd.badges} 
					cost={cmd.cost} 
					example={cmd.example} 
					data={cmd.data} 
				/>)
			}
		</div>
		{note && 
			<div className='
				mt-2 
				p-2 
				bg-slate-200 
				drop-shadow-lg 
				rounded-lg
				dark:bg-sky-950
				'>
				<i>NOTE: {note}</i>
			</div>}
		<div className='my-4 mx-2 flex justify-between items-center'>
			<div className='flex dark:bg-blue-50 gap-1 h-4'>
				{badges.map((badge, idx)=>
					<img 
						key={idx} 
						width='16' 
						height='16' 
						src={badge} 
						alt='asdf' 
					/>
				 )}
			</div>
			<div className='dark:bg-myfiol'>
				<a href={github}>
					<img 
						width='25' 
						height='25' 
						src={githubPng} 
						alt='' 
					/>
				</a>
			</div>
		</div>
	</div>

