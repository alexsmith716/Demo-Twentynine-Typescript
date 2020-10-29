import fetch from 'node-fetch';

//	https://github.com/apollographql/apollo-client/blob/master/docs/source/development-testing/client-schema-mocking.mdx

export const resolvers = {
	Query: {
		character: async () => {
			const results = await fetch('https://rickandmortyapi.com/api/character/1');
			const character = await results.json();
			return character;
		},
	},
};
