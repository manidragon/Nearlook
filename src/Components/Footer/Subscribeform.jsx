import React from 'react';
import styled from 'styled-components';

const Subscribeform = () => {
  return (
    <StyledWrapper>
      <form className="form">
        <span className="title">Subscribe to our newsletter.</span>
        <p className="description">Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.</p>
        <div>
          <input placeholder="Enter your email" type="email" name="email" id="email-address" />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;

    /* ORANGE GRADIENT BACKGROUND */
    background: #ff9f43;
    background: -webkit-linear-gradient(to right, #ff7a00, #ff9f43);
    background: linear-gradient(to right, #ff7a00, #ff9f43);

    padding: 20px;
    border-radius: 10px;
  }

  .title {
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 700;
    letter-spacing: -0.025em;
    color: #fff;
  }

  .description {
    line-height: 1.5rem;
    font-size: 1rem;
    margin-top: 1rem;
    color: rgb(255 237 213); /* light orange-tint text */
  }

  .form div {
    display: flex;
    max-width: 28rem;
    margin-top: 1rem;
    column-gap: 0.5rem;
  }

  .form div input {
    outline: none;
    line-height: 1.5rem;
    font-size: 0.875rem;
    color: rgb(255 255 255);
    padding: 0.5rem 0.875rem;

    background-color: rgb(255 165 0 / 0.08); /* soft orange glass */
    border: 1px solid rgba(255, 165, 0, 0.4);

    border-radius: 0.375rem;
    flex: 1 1 auto;
  }

  .form div input::placeholder {
    color: darkgray;
  }
     .form div input{
      background-color: white;
     }
  .form div input:focus {
    border: 1px solid #ff7a00; /* orange focus */
  }

  .form div button {
    color: #fff;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25rem;

    padding: 0.625rem 0.875rem;
    background-color: #ff7a00; /* primary orange button */

    border-radius: 0.375rem;
    border: none;
    outline: none;
  }
`;


export default Subscribeform;
