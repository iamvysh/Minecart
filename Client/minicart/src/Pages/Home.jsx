import React from 'react'
import Navigationbar from '../Components/Navigationbar'
import Carouser from '../Components/Carouser'
import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";
import Footer from '../Components/Footer';


const Home = () => {


  return (
    <>
     <Navigationbar/>   
     <Carouser/>

     <MDBContainer fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>Product Listing</strong>
      </h4>

      <MDBRow>
        <MDBCol md="12" lg="4" className="mb-4">
          <MDBRipple
            rippleColor="dark"
            rippleTag="div"
            className="bg-image rounded hover-zoom shadow-1-strong"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(1).webp"
              fluid
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                <div className="d-flex justify-content-start align-items-start h-100">
                  <h5>
                    <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                      $123
                    </span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </MDBRipple>
        </MDBCol>

        
      </MDBRow>
     
    </MDBContainer>
      

      <Footer/>
    </>
  )
}

export default Home
