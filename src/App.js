

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />
    </div>
  );
}

function Food(foo) {
  const {fav} = foo
  return <h1>I like {fav}</h1>
}

export default App;
