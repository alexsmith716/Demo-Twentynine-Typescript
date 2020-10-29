import { makeExecutableSchema } from 'graphql-tools';

// ------------------------------------------------------------------

const alienStarships = [
	{
		id: '03000',
		name: 'Alien Millenium FalconZZ',
		length: 34.37,
	},
	{
		id: '03001',
		name: 'Alien-X-WingZZ',
		length: 12.5,
	},
	{
		id: '03002',
		name: 'Alien TIE Advanced x1ZZ',
		length: 9.2,
	},
	{
		id: '03003',
		name: 'Alien Imperial shuttleZZ',
		length: 20,
	},
];

const alienStarshipData = {};

alienStarships.forEach((ship) => {
	alienStarshipData[ship.id] = ship;
});

// ------------------------------------------------------------------

function getAlienStarship(id) {
	return alienStarshipData[id];
}

// ------------------------------------------------------------------

export const typeDefs = `
	enum LengthUnit {
		METER
		FOOT
	}

	type AlienStarship {
		id: ID!
		name: String!
		length(unit: LengthUnit = METER): Float
		coordinates: [[Float!]!]
	}

	type Query {
		alienStarship(id: ID!): AlienStarship
	}
`;

export const alienStarshipResolvers = {
	Query: {
		alienStarship: (root, { id }) => getAlienStarship(id),
	},
};

export const alienStarshipSchema = makeExecutableSchema({
	typeDefs,
	alienStarshipResolvers,
});
