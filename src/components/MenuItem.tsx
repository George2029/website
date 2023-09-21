import { HashLink } from 'react-router-hash-link';

type menuItem = {
	title: string;
	onClick: ()=>void;
}

export const MenuItem = ({title, onClick} : menuItem) => { 
	let link = `#${title}`;
	return (
	<HashLink smooth to={link}><div className='h-20 font-bold leading-[5rem] text-center' onClick={onClick}>
		{title}
	</div>
	</HashLink>
	)
}
