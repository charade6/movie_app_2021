

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" something={true} papapa={['hello', 1, 2, true]} />
    </div>
  );
}

function Food(foo) {
  console.log(foo)
  return <h1>I like potato</h1>
}

export default App;
