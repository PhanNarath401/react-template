import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export const PayPalBox = () => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AVdPaMtmpvW8PPZ1XSpeMHfSoCEdrn-0EMl6D-6st7x36VYAwyrVL-eh097lHwEO0a2-99P2swOv2x6O",
      }}
    >
      <div className="d-flex justify-content-center">
        <div style={{ padding: "20px" ,width: "30%" }}>
          <PayPalButtons
            style={{ layout: "vertical", width: "250px" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "10.00", // តម្លៃសរុបសម្រាប់ទូទាត់
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                alert(
                  `ការទូទាត់បានជោគជ័យ! អ្នកទិញ៖ ${details.payer.name.given_name}`
                );
              });
            }}
            onError={(err) => {
              console.error("កំហុស៖", err);
            }}
          />
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

// export default PayPalBox;
