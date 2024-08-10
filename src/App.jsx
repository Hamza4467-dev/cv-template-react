import React from 'react'
import Calculator from './components/Calculator'
import Cards from './components/Cards'
import List from './components/list'
import Cv from './components/Cv'
function App() {


  let descriptionData = [
    { descriptions: 'This resource was generated with AI. You can create your own using our AI image generator.' }
  ]
  let productData = [
    {
      title: "View of football shoes",
      price: 200,
      img: "https://img.freepik.com/free-photo/close-up-futuristic-sneakers_23-2151005726.jpg?ga=GA1.1.362291668.1716312770&semt=ais_hybrid",
      btn: "login"
    },
    {
      title: "A pair of sneakers with laces and a stripe",
      price: 1,
      img: "https://img.freepik.com/premium-photo/pair-sneakers-with-laces-stripe_1057389-103443.jpg?ga=GA1.1.362291668.1716312770&semt=ais_hybrid"
    },
    {
      title: "Futuristic football game shoe",


      img: "https://img.freepik.com/free-photo/futuristic-football-game-shoe_23-2151153045.jpg?ga=GA1.1.362291668.1716312770&semt=ais_hybrid"
    },
  ]

  return (

    <>
      <Cv></Cv>

      {/* <div className="container">
        <div className="row">
          <div className="col-md-4">

            <Cards

              {...productData[0]}
              isLogin={true}
            />

          </div>
          <div className="col-md-4">
            <Cards
              {...productData[1]}
              isLogin={true}
            />
          </div>
          <div className="col-md-4">

            <Cards
              {...productData[2]}
              isLogin={false}
            />
          </div>
        </div>
      </div> */}

    </>


  )

}

export default App