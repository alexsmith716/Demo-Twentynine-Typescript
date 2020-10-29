import React, { useState, useEffect } from 'react';

//  https://github.com/facebook/jest/blob/master/docs/TutorialReact.md

export type Props = {
	page?: any;
	children?: any;
};

export const LinkTest: React.FC<Props> = ({ page, children }) => {
	const [onMouseHoverStatus, setOnMouseHoverStatus] = useState('normal');

	useEffect(() => {
		// console.log('>>>>>>>>>>>>>> LinkTest > useEffect() > componentDidMount > onMouseHoverStatus: ', onMouseHoverStatus);
		if (onMouseHoverStatus) {
			// console.log('>>>>>>>>>>>>>> LinkTest > useEffect() > componentDidUpdate > onMouseHoverStatus: ', onMouseHoverStatus);
		}

		return () => {
			// console.log('>>>>>>>>>>>>>> LinkTest > useEffect() > componentWillUnmount > cleanup phase');
		};
	}, [onMouseHoverStatus]);

	return (
		<div className="bg-color-slategray">
			<div className="bg-color-ivory container-padding-border-radius-1 mb-5 text-break">
				<h2>LinkTest</h2>

				{onMouseHoverStatus && (
					<div>state variable &quot;onMouseHoverStatus&quot; state: {onMouseHoverStatus}</div>
				)}

				<div>
					<a
						data-testid="hover-anchorlink"
						className={onMouseHoverStatus}
						href={page || '#'}
						onMouseEnter={() => setOnMouseHoverStatus('hovered')}
						onMouseLeave={() => setOnMouseHoverStatus('normal')}
					>
						{children}
					</a>
				</div>
			</div>
		</div>
	);
};
