import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Success = () => {
    return(
        <div
        style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
    }}
    >    
        <img 
        style={{ 
            width: 75, 
            height: 75,
            borderRadius: 10,
            marginBottom: 20 
        }}
        src="/images/success.png"/>
       <Link to ="/"> <button 
        style={{
            border: "none",
            width: 200,
            borderRadius: 10,
            padding: "10px",
            backgroundColor: "teal",
            color: "white",
            fontSize: 30,
            fontWeight: "700",
            cursor: "pointer"
        }}
    >
        Successfull.
        </button>
</Link>
        <h3 
        style = {{
            width: 350,
            textAlign: "center",
            fontWeight: 600
            }}
        >
Your order is being prepared. Thanks for choosing Style.Hub</h3>

    </div>
    );
    };

    export default Success;