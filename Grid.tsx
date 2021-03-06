import {getModifiers} from 'components/libs';

import React from 'react';
import './Grid.scss';

import * as Types from 'components/types';

type GridProps = {
	children: Types.Children;
	size?: Types.Size;

	columns?: number;
};

export const Grid = (props: GridProps) => {
	const {children, size = 'default', columns = 'auto-fit'} = props;

	if (!children || React.Children.count(children) === 0) {
		return null;
	}

	const base: string = 'grid';

	const style = {
		'--columns': `${columns}`,
	} as React.CSSProperties;

	const atts: object = {
		className: getModifiers(base, {
			items: `items-${React.Children.count(children)}`,
			size,
		}),
		// style
	};

	return <div {...atts}>{children}</div>;
};
