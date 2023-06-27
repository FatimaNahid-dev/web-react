import React from 'react';

export default function Header() {
  return (
    <>
      <div className='bg-dark'>
        <div style={{ width: '95vw', height: '100vh' }} className="d-flex justify-content-center align-items-center">
          <div>
            <img className="image-fluid" width="400px" src="https://www.vhv.rs/dpng/d/126-1264829_e-commerce-illustration-png-transparent-png.png" alt="" />
          </div>
          <div className="container-fluid ">
            <h1 className="text-success">Lorem ipsum dolor sit.</h1>
            <p className="text-secondary d-flex justify-content-center align-items-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quas!</p>
          </div>
        </div>
      </div>
      {/* <div className="row">
  <div className="col-md-6"></div>
  <div className="col-md-6"></div>
</div> */}

    </>
  );
}
