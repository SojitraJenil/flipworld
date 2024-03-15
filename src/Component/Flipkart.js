import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Header from "./Header";
import { FidgetSpinner, Watch } from "react-loader-spinner";
import "../Component/style.css";

function FlipKart(props) {
  const [data, setdata] = useState([]);
  const [categories, setCategories] = useState(true);
  const [status, setStatus] = useState(true);

  useEffect(() => {
    Prosucthandler();
    CatagoryHandler();
  }, []);

  const Prosucthandler = () => {
    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        // console.log(response.data.products);
        setdata(response.data.products);
        setStatus(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const CatagoryHandler = async () => {
    const response = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    setCategories(response.data);
    console.log(response.data);
  };
  const CatagoryFindHandler = async (item) => {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${item}`
    );
    console.log(response.data.products);
    setdata(response.data.products);
  };

  const SearchProduct = async (e) => {
    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${e}`
    );
    setdata(response.data.products);
  };

  if (status) {
    return (
      <>
        <div
          className="spinner"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Watch
            visible={true}
            height="80"
            width="80"
            radius="48"
            color="#4fa94d"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </>
    );
  }
  return (
    <>
      <Header handler={SearchProduct} />
      <div className="d-flex" style={{ width: "100%" }}>
        <div className="border-gray border-5 border" style={{ width: "18%" }}>
          <div>
            <h3 className="text-center">Flip-world</h3>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0" alwaysOpen>
                <Accordion.Header>CATEGORIES</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    {categories != true &&
                      categories.map((item) => {
                        return (
                          <>
                            <li
                              className="py-1"
                              onClick={() => {
                                CatagoryFindHandler(item);
                              }}
                            >
                              {item}
                            </li>
                          </>
                        );
                      })}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>CUSTOMER RATINGS</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <input className="my-2" type="checkbox" /> 5★ & above
                    </li>
                    <li>
                      <input className="my-2" type="checkbox" /> 4★ & above
                    </li>
                    <li>
                      <input className="my-2" type="checkbox" /> 3★ & above
                    </li>
                    <li>
                      <input className="my-2" type="checkbox" /> 2★ & above
                    </li>
                    <li>
                      <input className="my-2" type="checkbox" /> 1★ & above
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>BRAND</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <input className="my-2 ps-2" type="checkbox" />{" "}
                      <span className="ms-1"> DELL</span>
                    </li>
                    <li>
                      <input className="my-2 ps-2" type="checkbox" />{" "}
                      <span className="ms-1"> LG</span>
                    </li>
                    <li>
                      <input className="my-2 ps-2" type="checkbox" />{" "}
                      <span className="ms-1"> Hp</span>
                    </li>
                    <li>
                      <input className="my-2 ps-2" type="checkbox" />{" "}
                      <span className="ms-1"> BENQ</span>
                    </li>
                    <li>
                      <input className="my-2 ps-2" type="checkbox" />{" "}
                      <span className="ms-1"> SAMSUNG</span>
                    </li>
                    <li>
                      <input className="my-2 ps-2" type="checkbox" />{" "}
                      <span className="ms-1"> LENOVO</span>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div
          className="border-gray border-5 border ms-1"
          style={{ width: "82%" }}
        >
          <Row style={{ width: "100%" }}>
            {data.map((val, index, all) => {
              return (
                <>
                  <Col xl={3} lg={3} md={6} sm={12}>
                    <Link
                      to={`/products/${val.id}`}
                      className="text-decoration-none"
                    >
                      <Card style={{ width: "18rem" }} className="my-3 p-0">
                        <Card.Img
                          variant="top"
                          style={{ height: "200px", objectFit: "cover" }}
                          src={val.thumbnail}
                        />
                        <Card.Body>
                          <h6 className="text-center">
                            <b>{val.title}</b>
                          </h6>
                          <p className="text-start my-1">{val.name}</p>
                          <span>Price -:</span>
                          <span className="my-1 ms-2">{val.price}</span> <br />
                          <span>discount -:</span>
                          <span className="my-1 ms-2">
                            {val.discountPercentage}% Off
                          </span>{" "}
                          <br />
                          <span>Rating -:</span>
                          <span className="my-1 ms-2">{val.rating}</span> <br />
                          <span>id -:</span>
                          <span className="my-1 ms-2">{val.id}</span>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                </>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
}

export default FlipKart;
