import React from 'react'
import PropTypes from 'prop-types'

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} width="200px" alt="" />
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'https://cdn.imweb.me/thumbnail/20200415/bb2adfaee6702.png',
    // rating: 5,
  },
  {
    id: 2,
    name: 'kimbob',
    image:
      'https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'gogi',
    image:
      'https://static.hubzum.zumst.com/hubzum/2018/12/05/13/38035029939e44f3b76c6a0ddae80842.jpg',
    rating: 4.9,
  },
  {
    id: 4,
    name: 'hamburger',
    image:
      'https://image.chosun.com/sitedata/image/202001/13/2020011303147_0.jpg',
    rating: 4.8,
  },
]

// listItem 에 key 가 없으면 안된다는 오류가 떠서, id를 지정해주고 key 로 넘겨줌.
function App() {
  return (
    <div>
      {foodILike.map((food) => {
        return (
          <Food
            name={food.name}
            picture={food.image}
            key={food.id}
            rating={food.rating}
          />
        )
      })}
    </div>
  )
}

export default App
