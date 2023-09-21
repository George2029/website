declare module "*.jpg" {
	const path: string;
	export default path;
}

declare module 'react-router-hash-link';

declare module "*.png" {
	const path: string;
	export default path;
}

declare module "*.webp" {
	const path: string;
	export default path;
}
type Command = {
	title: string, 
	header: string, 
	cost: number | null,
	synopsis: string | null,
	example: string,
	badges: string[],
	data: string
}

type Bot = {
	title: string,
	header: string,
	descr: string,
	commands: Command[],
	img: string,
	note: string | null,
	badges: string[],
	github: string
}

