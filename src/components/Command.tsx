import {useState} from 'react';

export let Command = ({title, header, cost, synopsis, example, badges, data}: Command) => {
	let [isCommandDataHidden, setIsCommandDataHidden] = useState(true);
	let commandClasses = `border-myfiol border-b p-2 ${isCommandDataHidden ? 'hidden' : 'block'}`;
	return (
	<div className='p-3'>
		<div 
			className='
			flex
			justify-between
			cursor-pointer
			font-bold
			' 
			onClick={()=>setIsCommandDataHidden(e=>!e)}
		>
			<div>
				{title}
			</div>
			
			<div className='text-myfiol drop-shadow-xl'>
				{isCommandDataHidden ? '∨' : '∧'}
			</div>
		</div>
		<div className={commandClasses}>
			{data}
		</div>
	</div>
	)
}
