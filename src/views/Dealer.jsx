import React, { useEffect, useState } from 'react'
import Crop from '../components/Crop'

import GooglePayButton from "@google-pay/button-react";
import CropService from '../services/Crop'


const Dealer = () => {
    const [crops, setCrops] = useState([])
    const [buyTotal, setBuyTotal] = useState(0)

    useEffect(() => {
        CropService.getAllCrops()
            .then((res) => {
                setCrops(res.data);
            })
            .catch((err) => {
                console.log(err);
            }
            )
    }, [])

    const handleBuy = (quantity, cost) => {
        setBuyTotal((quantity * cost).toString())
    }

    useEffect(() => {
      console.log(buyTotal);
    }, [buyTotal])
    


    return (
        <div className='dashboard'>
            <h1 className="title">Listed Crops</h1>
            <div className="dashboard-container row">
                {crops.map(crop => {
                    const { name, cost, quantity, id } = crop;
                    return (
                        <Crop
                            key={id}
                            name={name}
                            price={cost}
                            quantity={quantity}
                            id={id}
                            handleBuy={handleBuy}
                            type="dealer"
                        />
                    )
                })}
            </div>
            <main> 
            <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "12345678901234567890",
            merchantName: "Demo Merchant",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: buyTotal,
            currencyCode: "INR",
            countryCode: "US",
          },
          shippingAddressRequired: true,
          callbackIntents: ["PAYMENT_AUTHORIZATION"],
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log(paymentRequest);
        }}
        onPaymentAuthorized={paymentData =>{
          console.log('paymentData ' + paymentData);
          return { transactionState: 'SUCCESS'}
        }}
        existingPaymentMethodRequired='false'
        buttonColor="black"
        buttonType="buy"
      ></GooglePayButton>
            </main>
        </div>
    )
}

export default Dealer