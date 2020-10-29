import { gql } from '@apollo/client';

export const GET_REVIEWS = gql`
	query GetReviews($episode: Episode!) {
		reviews(episode: $episode) {
			episode
			stars
			commentary
		}
	}
`;

export const GET_A_DROID = gql`
	query GetADroid($droidID: ID!) {
		droid(id: $droidID) {
			id
			name
			friends {
				id
				name
			}
			appearsIn
			primaryFunction
		}
	}
`;

export const GET_HERO = gql`
	{
		hero {
			name
		}
	}
`;

export const GET_THE_SCHEMA = gql`
	{
		__schema {
			types {
				name
				kind
				description
				fields {
					name
				}
			}
		}
	}
`;
