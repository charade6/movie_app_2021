const foodILike = [
  {
    name: "chicken",
    image: "https://health.chosun.com/site/data/img_dir/2021/03/31/2021033102448_0.jpg"
  },
  {
    name: "pizza",
    image: "https://src.hidoc.co.kr/image/lib/2020/11/9/1604911318873_0.jpg"
  }
]

// function renderFood(dish) {
//   return (
//     <Food name={dish.name} picture={dish.image} />
//   )
// }


const renderFood = dish => <Food name={dish.name} picture={dish.image} />

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

function Food({name, picture}) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} />
    </div>
  )
}

export default App;
