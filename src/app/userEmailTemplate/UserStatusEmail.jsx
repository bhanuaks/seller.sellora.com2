import { baseUrl } from "@/Http/helper";

const UserStatusEmail = ({ name = "", link = "" }) => {
    return (
      <html lang="en" style={{ margin: 0, padding: 0, backgroundColor: "#f4f6f8" }}>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Account Status Verification</title>
          <style>{`
            @media (max-width: 620px) {
              .container {
                margin: 20px 10px !important;
              }
              .content {
                padding: 20px 20px 30px !important;
              }
              .otp-code {
                font-size: 20px !important;
                padding: 10px 20px !important;
              }
            }
          `}</style>
        </head>
        <body style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#f4f6f8",
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          WebkitTextSizeAdjust: "100%",
          msTextSizeAdjust: "100%"
        }}>
          <div
            className="container"
            role="main"
            aria-label="OTP Verification Email"
            style={{
              maxWidth: "600px",
              margin: "40px auto",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              overflow: "hidden"
            }}
          >
            <div
              className="header"
              style={{
                backgroundColor: "#004080",
                padding: "20px 30px",
                textAlign: "center"
              }}
            >
              <img
                src={`https://sellora.com/front/assets/images/logo-01.png`}
                alt="Company Logo"
                style={{ maxHeight: "50px", width: "auto" }}
              />
            </div>
            <div
              className="content"
              style={{
                padding: "30px 30px 40px",
                color: "#333333"
              }}
            >
              <p className="greeting" style={{ fontSize: "18px", marginBottom: "16px" }}>
                Hello {name},
              </p>
              <p className="message" style={{ fontSize: "16px", lineHeight: "1.5", marginBottom: "24px" }}>
                Your verify link is: <a href={link}>Click Here</a>
              </p> 
              { /* <p
                className="otp-code"
                aria-label="One Time Password code"
                style={{
                  display: "inline-block",
                  backgroundColor: "#004080",
                  color: "#ffffff",
                  fontSize: "24px",
                  letterSpacing: "4px",
                  fontWeight: "700",
                  padding: "12px 24px",
                  borderRadius: "6px",
                  userSelect: "all"
                }}
              >
                
              </p>
              */ }
              { /* <p className="message" style={{ fontSize: "16px", lineHeight: "1.5", marginTop: "24px" }}>
                Please use this code to complete your verification. This code is valid for a limited time only.
                If you did not request this, please ignore this email or contact support immediately.
              </p> */ }
            </div>
            <div
              className="footer"
              style={{
                textAlign: "center",
                fontSize: "12px",
                color: "#999999",
                padding: "20px 30px",
                backgroundColor: "#f4f6f8"
              }}
            >
              &copy; 2025 sellora.com. All rights reserved.
            </div>
          </div>
        </body>
      </html>
    );
  };
  
  export default UserStatusEmail;
  