### Dependency Injection

In simple terms, DI is a mechanism which provides approach to change dependencies without changing current class.
As a result we avoid tight coupling between dependencies.

Angular uses entity called `Injector` - it's responsibility to create dependency instance and inject it as rule in constructor parameter.

Base implementation of DI:
```
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
```
