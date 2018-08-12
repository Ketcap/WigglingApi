import faker from 'faker';

const generateOrganizer = (id) => ({
	_id: id,
	name: faker.company.companyName(),
	image: 'http://placekitten.com/200/300'
})

export default [
	{
		method: 'GET',
		url: '/company/:id',
		handler: async (req, rep) => {
			const { id } = req.params;
			rep.send(
				generateOrganizer(id)
			);
		}
	}

]