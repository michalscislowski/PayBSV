import React from "react";


export default function ConfirmButton() {

  return (
    <div>
        <button className="custom-btn btn-5">
            <span>WYŚLIJ</span>
        </button>
        <style jsx>{`
button {
    margin: 20px;
    outline: none;
    font-size: 2.3rem;
    border-radius: 8px;
}
span {
    font-weight: 900;
}
.custom-btn {
    width: 200px;
    height: 70px;
    padding: 10px 25px;
    border: 2px solid #000;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    border-radius: 6px;
}
.btn-5 {
    background: #000;
    color: #fff;
    line-height: 42px;
    padding: 0;
    border: none;
}
.btn-5:hover {
    background: transparent;
    color: #000;
    box-shadow:
    7px 7px 20px 0px #0002,
    4px 4px 5px 0px #0001;
}
.btn-5:before,
.btn-5:after{
    content:'';
    position:absolute;
    top:0;
    right:0;
    height:2px;
    width:0;
    background: #000;
    transition:400ms ease all;
}
.btn-5:after{
    right:inherit;
    top:inherit;
    left:0;
    bottom:0;
}
.btn-5:hover:before,
.btn-5:hover:after{
    width:100%;
    transition:800ms ease all;
}
         `}</style>
    </div>
  ) 
}
