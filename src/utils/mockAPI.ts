function postRequestRejectPromise(
	resolveReject: string,
	requestFound: boolean,
	delay: number,
	req: any,
): Promise<any> {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (resolveReject === 'resolve') {
				if (requestFound) {
					resolve({
						value: `${resolveReject}`,
						time: Date.now(),
						delay: delay,
						message: 'RESOLVED! 200 - Data Found.',
						status: 200,
						data: req ? req.data.concat(req.newData) : null,
					});
				} else {
					resolve({
						value: `${resolveReject}`,
						time: Date.now(),
						delay: delay,
						message: 'RESOLVED! 404 - Data Not Found.',
						status: 404,
					});
				}
			} else {
				reject({
					value: `${resolveReject}`,
					time: Date.now(),
					delay: delay,
					message: 'REJECTED! 500 - General Error.',
					status: 500,
				});
			}
		}, delay);
	});
	return promise;
}

// ------------------------------------------------------------------------

export type Props = {
	value: string;
	time: number;
	delay: number;
	message: string;
	status: number;
};

export function postRequestConcatExportASYNC(
	resolveReject: string,
	requestFound: boolean,
	delay: number,
	req: any,
): Promise<any> {
	resolveReject === 'reject' ? (delay = 0) : null;

	const promise = postRequestRejectPromise(resolveReject, requestFound, delay, req);

	const thenProm = promise
		.then((result) => {
			console.log('###### mockAPI > postRequestConcatExportASYNC > PROMISE.THEN1:', result);
			result.message += ' P1 Good Result!';
			return result;
		})
		.catch((error) => {
			console.log('###### mockAPI > postRequestConcatExportASYNC > CATCH:ERROR:', error);
			return error;
		})
		.then((result) => {
			console.log(
				'###### mockAPI > postRequestConcatExportASYNC > AFTER CATCH > PROMISE.THEN2:',
				result,
			);

			const message = result.value === 'reject' ? 'RESOLVED! 404 - Data Not Found.' : result.message;
			const status = result.value === 'reject' ? 404 : result.status;

			const resolveRejectedPromise = {
				time: result.time,
				delay: result.delay,
				message: message,
				status: status,
			};

			result.value === 'reject' ? (resolveRejectedPromise.message += ' P1 After An Error!') : null;

			return resolveRejectedPromise;
		});

	return thenProm;
}
