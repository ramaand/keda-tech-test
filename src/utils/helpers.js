import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

export const cx = (className, condition, ...props) => {
	return twMerge(classNames(className, condition, ...props));
};
