import * as React from 'react';
import {useState, useEffect} from 'react';

type MatchMediaProps = {
	children: React.ReactNode;
	fallback: React.ReactNode;
	query?: string;
};

export const MatchMedia = (props: MatchMediaProps) => {
	const [isMatched, setMatched] = useState(false);

	const {query = '(min-width:768px)', children, fallback} = props;

	useEffect(() => {
		const updateMatch = () => {
			setMatched(window.matchMedia(query).matches);
		};

		updateMatch();

		window.matchMedia(query).addEventListener('change', updateMatch);

		return () => {
			window.matchMedia(query).removeEventListener('change', updateMatch);
		};
	}, [query]);

	return !isMatched && fallback ? <>{fallback}</> : <>{children}</>;
};
