import {Carousel, CarouselOptions} from 'components/carousel';
import {MatchMedia} from 'components/layout';
import React from 'react';
import {Grid} from './';

import * as Types from 'components/types';

type GridProps = {
	children: Types.Children;
	id: string;
	options?: CarouselOptions;
};

export const CarouselGrid = (props: GridProps) => {
	const {
		children,
		id,
		options = {
			pageDots: true,
			prevNextButtons: true,
			groupCells: true,
			cellAlign: 'center',
		},
	} = props;

	if (!children || React.Children.count(children) === 0) {
		return null;
	}

	return (
		<MatchMedia query="(max-width: 900px)" fallback={<Grid>{children}</Grid>}>
			<Carousel options={options} id={id} fullwidth multiitem={3}>
				{children}
			</Carousel>
		</MatchMedia>
	);
};
