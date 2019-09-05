import * as React from 'react';

import './Container.scss';

import {getModifiers} from 'components/libs';

import {Size} from 'components/types';

type ContainerProps = {
	children: React.ReactNode;
	width?: Size;
};

export const Container = (props: ContainerProps) => {
	const {children, width = 'default'} = props;

	if (!children) {
		return null;
	}

	const base: string = 'container';
	const atts: object = {
		className: getModifiers(base, {
			width,
		}),
	};

	return <div {...atts}>{children}</div>;
};
