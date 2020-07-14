import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-1"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/Details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>

                <button
                  className="card-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      {" "}
                      <i className="fas fa-check-circle" />
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">‎₹‎</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    backgroung: transparent;
    border-top: transparent;
    transition: all 1s line;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .card-btn {
    margin: 0;
    border: 0;
    background: transparent;
    list-style: none;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    left: 80%;

    top: 50%;
    z-index: 2;
  }
  .card-btn i {
    display: inline-block;
    opacity: 0;
    transform: translateY(300%);
    transition: all 0.5s ease 0s;
  }
  .card-btn i:nth-child(2) {
    transition-delay: 0.05s;
  }
  .card-btn i:nth-child(3) {
    transition-delay: 0.13s;
  }

  &:hover .card-btn i {
    opacity: 1;
    transform: translateY(0);
  }
  .card-btn i {
    color: #000;
    background-color: #fff;
    line-height: 50px;
    height: 50px;
    width: 50px;
    margin: 0 2px 10px;
    border-radius: 50%;
    display: block;
    position: relative;
    z-index: 2;
    transition: all 0.3s;
  }
`;
