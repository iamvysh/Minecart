import React from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
  } from "mdb-react-ui-kit";
import Navigationbar from '../Components/Navigationbar';
import Footer from '../Components/Footer';

const Product = () => {



  return (
    <>
      
      {/* <h1 style={{textAlign:"center"}}>Products</h1> */}
      <Navigationbar/>

      <div >
      <MDBContainer fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>Bestsellers</strong>
      </h4>

      <MDBRow>
        <MDBCol md="12" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      <span className="badge bg-primary ms-2">New</span>
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
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Product name</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Category</p>
              </a>
              <h6 className="mb-3" >₹ 61.99</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
       
      </MDBRow>
    </MDBContainer>


    <Footer/>

      </div>



    </>
  )
}

export default Product