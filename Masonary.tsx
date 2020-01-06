import {getModifiers} from 'components/libs';
import React, {useEffect, useState} from 'react';
import './Masonary.scss';

import * as Types from 'components/types';

export type MasonaryProps = {
	children: Types.Children;
};

export const Masonary = (props: MasonaryProps) => {
	const {children} = props;

	if (!children) {
		return null;
	}

	const [height, setHeight] = useState();

	const ref = React.createRef<HTMLDivElement>();

	const base: string = 'gallery-masonary';
	const atts: object = {
		className: getModifiers(base, {}),
		ref,
	};

	useEffect(() => {
		if (ref && ref.current) {
			const heights: Array<number> = [0, 0, 0, 0, 0, 0];
			const columns: number = 3;
			const items: any = Array.from(ref.current.children);

			items.forEach((item: any, index: number) => {
				const order = (index + 1) % columns || columns;
				const vpo: any = item.getBoundingClientRect();
				heights[order] = (heights[order] || 0) + vpo.height;
			});

			const f = Math.max.apply(Math, heights);

			setHeight(f);
		}

		return () => {};
	});

	return (
		<div {...atts} style={{height: `${height}px`}}>
			{React.Children.map(children, (item, index) => (
				<div key={index} className={`${base}__item`}>
					{item}
				</div>
			))}
		</div>
	);
};
