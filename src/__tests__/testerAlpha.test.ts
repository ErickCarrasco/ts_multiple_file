import { HelloWorld } from "../../lib/prototype1";

test('My Greeter', () => {
  expect(HelloWorld('Carl')).toBe('Hallo Welt, Ich heiße Carl');
});