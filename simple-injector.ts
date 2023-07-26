class UserService {
	sayHello() {
		console.log('Hi');
	}
}

class Component {
	constructor(userService: UserService) {}
}

class Injector {
	#container = new Map();

	constructor(providers) {
		providers.forEach(provider => this.#container.add(provider, new provider()));
	}

	get(service) {
		if (!this.container.has(service)) {
			throw new Error('No provider found');
		}
		return this.container.get(service);
	}


}

const injector = new Injector([UserService]);
const component = new Component(injector.get(UserService));
