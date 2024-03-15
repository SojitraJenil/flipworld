import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./Header";

const SingleProduct = () => {
  const [data, setdata] = useState(true);
  const [image, setimage] = useState();
  const { id } = useParams();
  const [status, setstatus] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setdata(response.data);
      console.log(response.data);
      setstatus(true);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };



  const getimg = (all) => {
    setimage(all);
  }

  if (status) {
    return (
      <>
      <Header />
        <Container>
          <Row style={{ width: "100%" }}>
            <Col xl={5}>
              <div className="">
                <img src={image  || data.thumbnail} className="object-fit-cover" style={{height:"500px",width:"500px"}}/>
                <div className="d-flex justify-content-between">
                  {data.images.map((ele) => {
                    return (
                      <img
                        className="my-2 border border-black"
                        style={{ height: "100px", width: "100px" }}
                        value={"1"}
                        onClick={()=>{getimg(ele)}}
                        src={ele}
                      />
                    );
                  })}
                </div>
              </div>
            </Col>
            <Col xl={7}>
              <h5>{data.title} </h5>
              <h6>{data.description}</h6>
              <h3>${data.price}</h3>
              <p>
                <b>Available offers -:</b>
              </p>
              <p>
                Bank Offer10% off on Citi-branded Credit and Debit Card Txns, up
                to ₹1,500 on orders of ₹10,000 and aboveT&C
              </p>
              <p>
                Bank Offer10% off on Citi-branded Credit Card EMI Transactions,
                up to ₹2,000 on orders of ₹10,000 and aboveT&C
              </p>
              <p>
                Bank OfferFlat ₹1,000 off on OneCard Credit Card EMI
                Transactions on orders of ₹10,000 and aboveT&C
              </p>
              <p>
                Special PriceGet extra 20% off (price inclusive of
                cashback/coupon)T&C
              </p>
              <h6>
                <b>View 6 more offers</b>
              </h6>
              <table border={1} width={"500px"}>
                <tr>
                  <td>
                    <input type="checkbox" className="ms-1" id="" />
                  </td>
                  <td width={"200px"}>Buy without Exchange</td>
                  <td>
                    <b>₹6,799</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" className="ms-1" id="" />
                  </td>
                  <td width={"200px"}>Buy without Exchange</td>
                  <td>
                    <b>up to ₹220 off</b>
                  </td>
                </tr>
              </table>
              <p className="py-2">
                3 Years Manufacturer Warranty <a href="#">Know More</a>{" "}
              </p>
              <div className="">
                <button className="btn btn-outline-danger  w-25 mx-1 border-3">Add to cart</button>
                <button className="btn btn-outline-success w-25 mx-1 border-3">Buy now</button>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};

export default SingleProduct;
