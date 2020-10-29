import { gql } from '@apollo/client';

export const fragmentTypeDroid = gql`
	fragment fragmentTypeDroid on Droid {
		id
		name
		friends {
			id
			name
		}
		appearsIn
		primaryFunction
	}
`;
