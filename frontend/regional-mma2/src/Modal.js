import React from 'react';
import Loader from 'react-loader-spinner'
import './Modal.css';

const Modal =(props)=>(    
    <div className="Modal__Wrapper">
        <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />
    </div>
)



export default Modal;