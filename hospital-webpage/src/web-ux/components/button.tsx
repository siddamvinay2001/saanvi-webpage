import * as React from 'react';
import { Link } from 'react-router';
import cx from 'classnames';

import styles from './styles/buttonStyles.css';

export type TButtonEvent = React.SyntheticEvent<HTMLButtonElement> | React.SyntheticEvent<HTMLAnchorElement>;
export type TMouseEvent = React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>;

export interface IButtonProps {
	className?: string;
	href?: string;
	primary?: boolean;
	secondary?: boolean;
	type?: 'button' | 'submit' | 'reset';
	link?: boolean;
	style?: object;
	external?: boolean;
	children: React.ReactNode;
	target?: '_blank' | '_self';
	rel?: string;
	onClick?: (e: TButtonEvent) => void;
	disabled?: boolean;
	tabIndex?: number;
	onMouseLeave?: (e: TMouseEvent) => void;
}

export default function Button({
	className,
	children,
	href,
	link = false,
	external,
	primary,
	secondary,
	...props
}: IButtonProps): React.ReactElement<IButtonProps> {
	const classnames = cx(
		{
			[styles['btn']]: !link
		},
		className,
		{
			[styles['btn-primary']]: primary,
			[styles['btn-secondary']]: secondary,
			[styles['btn-link']]: link
		}
	);

	if (!href) {
		return (
			<button className={classnames} {...props}>
				{children}
			</button>
		);
	}

	if (external) {
		return (
			<a className={classnames} href={href} {...props}>
				{children}
			</a>
		);
	}

	return (
		<Link className={classnames} to={href} {...props}>
			{children}
		</Link>
	);
}
