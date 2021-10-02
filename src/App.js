import PropTypes from 'prop-types'

const foodILike = [
  {
    id: 1,
    name: "chicken",
    image: "https://health.chosun.com/site/data/img_dir/2021/03/31/2021033102448_0.jpg",
    alt: "치킨",
    rating: 4.5
  },
  {
    id: 2,
    name: "pizza",
    image: "https://src.hidoc.co.kr/image/lib/2020/11/9/1604911318873_0.jpg",
    alt: "피자",
    rating: 4.3
  }
]

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} alt={dish.alt} rating={dish.rating} />
      ))}
    </div>
  );
}

function Food({name, picture, alt, rating}) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={alt}/>
    </div>
  )
}

export default App
