import faker from 'faker';

Date.prototype.addHours = function (h) {
	this.setTime(this.getTime() + (h * 60 * 60 * 1000));
	return new Date(this);
}

const generateEvent = () => {
	const starts = faker.date.future();
	const finishes = new Date(starts).addHours(faker.random.arrayElement([1, 1.5, 2, 2.5, 3, 3.5]))
	return {
		_id: faker.random.uuid(),
		organizer: faker.random.uuid(),
		contact: {
			phone: faker.phone.phoneNumber(),
			name: faker.name.firstName() + ' ' + faker.name.lastName(),
			username: faker.internet.userName(),
			image: 'http://placekitten.com/200/300',
			email: faker.internet.email()
		},
		dates: {
			starts, finishes,
			// Monday Tuesday Wednesday Thursday Friday Saturday Sunday
			repeats: faker.random.arrayElement([0, 1, 2, 3, 4, 5, 6])
		},
		place: {
			name: faker.company.companyName(),
			address: faker.address.streetAddress(),
			city: faker.address.city()
		},
		price: faker.commerce.price(0, 100),
		place: faker.random.arrayElement(['club', 'indoor', 'outdoor'])
	}
}



export default [
	{
		method: 'GET',
		url: '/events',
		handler: async (req, rep) => {
			rep.send(
				new Array(20).fill('').map(generateEvent)
			);
		}
	}

]