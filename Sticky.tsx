import React, {useEffect} from 'react';
import './Sticky.scss';

import * as Types from 'components/types';

type StickyProps = {
	children?: Types.Children;
};

export const Sticky = (props: StickyProps) => {
	const base: string = 'sticky';
	const {children} = props;

	const ref = React.createRef<HTMLDivElement>();

	if (!children) {
		return null;
	}

	const listener = (e: Event) => {
		if (ref.current) {
			const items = Array.from(ref.current.children);

			const bounds = items[0].getBoundingClientRect();

			// dynamically
			const offset = 40;

			// is sticking
			if (bounds.top <= offset) {
				// loop through all the children
				items.forEach((item: any, index: number) => {
					if (index > 0) {
						const vpo = item.getBoundingClientRect();
						const prevVpo = items[index - 1].getBoundingClientRect();

						const dy = vpo.top - offset;
						const prevHeight = prevVpo.height;

						const p = Math.min(Math.max(100 - Math.round((dy / prevHeight) * 100), 0), 100);
						const pc = 1 - p / 100;

						items[index - 1].style.opacity = pc;
						items[index - 1].style.transform = `translateY(${-(30 - pc * 30)}px)`;

						//item.querySelector('.foo').innerHTML = Math.round(pc*100);
						// item.querySelector('.foo').innerHTML = 95 - (95 - (pc*95));

						//items[index - 1].style.transform = `scale(${pc})`;

						/*
						if (index === 1) {
							console.log(pc * 0.9);
						}
						*/
					}
				});
			}
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', listener);

		return () => {
			window.removeEventListener('scroll', listener);
		};
	});

	return (
		<div className={base} ref={ref}>
			{children}
			{/*
			{React.Children.map(children, (child: React.ReactNode, index) => (
				<div className={`${base}__item`} key={`p-${index}`}>
					<div className={`${base}__inner`}>
						<span className="foo"></span>
						{child}
					</div>
				</div>
			))}
			*/}
		</div>
	);
};
