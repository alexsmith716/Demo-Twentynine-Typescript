import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadInfo } from '../../redux/modules/info';
import { State as InfoState } from '../../redux/modules/info';
import { Loading } from '../Loading';
import { Button } from '../Button';
import * as Styles from './styles';

export type State = {
	info: InfoState;
};

export const InfoBar: React.FC = () => {
	const dispatch = useDispatch();

	const loading = useSelector((state: State) => state.info.loading);
	const error = useSelector((state: State) => state.info.error);
	const errorResponse = useSelector((state: State) => state.info.errorResponse);
	const data = useSelector((state: State) => state.info.data);

	const doLoadInfo = async () => {
		try {
			await dispatch(loadInfo());
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div className="container">
			<Styles.InfoBarContainerBgColor className="flex-column-center mb-5">
				<Styles.InfoBarContainer className="flex-column-center">
					{/* (>>>>>>>>>>>>>>>>>>>>>> LOADING >>>>>>>>>>>>>>>>>>>>>>>>) */}
					{loading && <Loading text="Loading" />}

					{/* (>>>>>>>>>>>>>>>>>>>>>> ERROR >>>>>>>>>>>>>>>>>>>>>>>>) */}
					{error && (
						<>
							<div>RENDERING ERROR</div>
							<div>{`Message: ${errorResponse.error.message}`}</div>
							<div>{`Url: ${errorResponse.documentation_url}`}</div>
						</>
					)}

					{/* (>>>>>>>>>>>>>>>>>>>>>>>> LOADED >>>>>>>>>>>>>>>>>>>>>>>>) */}
					{!loading && (
						<Styles.InfoBarContainerStyled className="flex-column-center">
							<div>
								InfoBar message: &apos;
								<Styles.DataMessage>
									{data ? data.result.message : 'no message!'}
								</Styles.DataMessage>
								&apos;
							</div>
							<div>{data && new Date(data.result.time).toString()}</div>
							<div>{data && data.result.timeElapsed}</div>

							<div className="mt-2">
								<Button className="btn-primary" onClick={doLoadInfo}>
									Reload from server
								</Button>
							</div>
						</Styles.InfoBarContainerStyled>
					)}
				</Styles.InfoBarContainer>
			</Styles.InfoBarContainerBgColor>
		</div>
	);
};
