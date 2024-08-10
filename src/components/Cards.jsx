import React from 'react';



function Cards({ title, price, img, descriptions = "This resource was generated with AI. You can create your own using our AI image generator.", isLogin, hello, btn }) {
  const userAge = 28;

  function login() {
    alert("login")
  }
  const SubmitEvent = (btnname) => {
    alert(btnname)
  }

  return (

    <>

      <div className="container mt-5">


        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="card " style={{
              width: '300px',
              cursor: 'pointer'
            }} >
              <img src={img} className="card-img-top" alt={title} />
              <div className="card-body">
                {
                  userAge > 130 ? <h5 className="card-title">{title}</h5> : <h5 className="card-title">custome</h5>
                }


                <small className='d-block'>{descriptions}</small>
                <a href="#" className="btn btn-primary"

                  onClick={login}

                >
                  {btn}

                </a>
                <a href="#" className="btn btn-primary"

                  onClick={() => SubmitEvent(btn)}

                >
                  submitt

                </a>

              </div>
            </div >
          </div>
        </div>
      </div>
    </>

  );
}

export default Cards;
