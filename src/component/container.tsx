import { ReactNode } from 'react';

interface ComponentProps {
	children: ReactNode;
}

export const Container = (props: ComponentProps) => {
	return (
		<div className='w-screen flex justify-around'>
			<div className='w-full max-w-7xl min-w-[480px] px-8 md:px-24'>{props.children}</div>
		</div>
	);
};
