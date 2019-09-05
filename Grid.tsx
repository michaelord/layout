import * as React from 'react';

import './Grid.scss';

import {getModifiers} from 'components/libs';

import {Size} from 'components/types';

type GridProps = {
	children: React.ReactNode;
	size?: Size;
};

export const Grid = (props: GridProps) => {
	const {children, size = 'default'} = props;

	if (!children || React.Children.count(children) === 0) {
		return null;
	}

	const base: string = 'grid';

	const atts: object = {
		className: getModifiers(base, {
			items: `items-${React.Children.count(children)}`,
			size,
		}),
	};

	return <div {...atts}>{children}</div>;
};
