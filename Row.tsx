import {getModifiers} from 'components/libs';

import React from 'react';
import './Row.scss';

import * as Types from 'components/types';

type RowProps = {
	debug?: boolean;
	gap?: boolean;
	children: Types.Children;
};

export const Row = (props: RowProps) => {
	const {children, gap = true, debug = false} = props;

	if (!children || React.Children.count(children) === 0) {
		return null;
	}

	const base: string = 'row';

	const atts: object = {
		className: getModifiers(base, {
			items: `items-${React.Children.count(children)}`,
			gap,
			debug,
		}),
	};

	return (
		<div {...atts}>
			<div className={`${base}__main`}>
				{React.Children.map(children, (item, index) => {
					if (!item) {
						return null;
					}

					return (
						<div key={index} className={`${base}__item`}>
							{item}
						</div>
					);
				})}
			</div>
		</div>
	);
};
