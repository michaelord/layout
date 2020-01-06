import {getModifiers} from 'components/libs';
import {Size} from 'components/types';
import React from 'react';
import './Flex.scss';

import * as Types from 'components/types';

type FlexProps = {
	wrap?: boolean;
	children: Types.Children;
	size?: Size;
};

export const Flex = (props: FlexProps) => {
	const {children, size = 'default', wrap} = props;

	if (!children || React.Children.count(children) === 0) {
		return null;
	}

	const base: string = 'flex';

	const atts: object = {
		className: getModifiers(base, {
			wrap,
			items: `items-${React.Children.count(children)}`,
			size,
		}),
	};

	return <div {...atts}>{children}</div>;
};
