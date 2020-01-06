import {getModifiers} from 'components/libs';

import React from 'react';
import './Container.scss';

import * as Types from 'components/types';

type ContainerProps = {
	children: Types.Children;
	width?: Types.Size;
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
