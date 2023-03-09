import React from 'react';

import PropTypes from 'prop-types';

import { cx } from '~/utils/helpers';

const SectionWrapper = ({ children, id, className, style }) => {
	return (
		<div
			id={id}
			className={cx("bg-gray-50 min-h-screen", {}, className)}
			style={style}
		>
			<div className="max-w-7xl mx-auto px-2 xsm:px-4 sm:px-8">{children}</div>
		</div>
	);
};

SectionWrapper.propTypes = {
	children: PropTypes.node,
	id: PropTypes.string.isRequired,
	className: PropTypes.string,
	style: PropTypes.any,
};
SectionWrapper.defaultProps = {
	id: "section",
	className: "",
};

export default SectionWrapper;
