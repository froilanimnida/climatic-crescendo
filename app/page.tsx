import SearchBox from '@/components/SearchBox';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { ThemeToggle } from '@/components/ThemeToggler';
import WeatherInfoContainer from '@/components/WeatherInfoContainer';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='my-5 max-w-screen-2xl w-11/12 flex flex-row justify-between items-center'>
				<h1 className='text-xl text-primary font-bold'>Climatic Crescendo</h1>
				<ThemeToggle />
			</div>
			<Suspense fallback={<Skeleton />}>
				<SearchBox />
			</Suspense>
			<Suspense fallback={<Skeleton />}>
				<WeatherInfoContainer />
			</Suspense>
		</div>
	);
}
