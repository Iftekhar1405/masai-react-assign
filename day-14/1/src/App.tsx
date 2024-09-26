import './App.css'

type Direction = 'up' | 'down' | 'left' | 'right';

type AddNumbers = (x: number, y: number) => number;

const add: AddNumbers = (x, y) => {
  return x + y;
};

interface Person {
  name: string;
  age: number;
  isEmployed: boolean;
  greet: () => string;
}

const person: Person = {
  name: 'Raju',
  age: 30,
  isEmployed: true,
  greet: () => {
    return 'Hello, my name is Raju!';
  }
};

function App() {

  let a: number = 10;
  let b: string = 'raju';
  let c: boolean = true;
  let d: Number[] = [1, 2, 4, 3];
  let e: string[] = ['1', '2', '4'];
  let f: boolean[] = [true, false, true, false];
  let g: [number, string, boolean] = [1, 'shyam', true];

  enum DirectionEnum {
    up = 'up',
    down = 'down',
    left = 'left',
    right = 'right'
  }

  let h: void = undefined;
  let i: null = null;
  let j: undefined = undefined;

  return (
    <>
      <h1>{person.greet()}</h1>
      <p>The sum of 5 and 3 is: {add(5, 3)}</p>
    </>
  );
}

export default App;
