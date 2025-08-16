import { baseUrl } from "@/Http/helper";

const SellerLoginEmail = ({ name = "", otp = "" }) => {
     return (
    
      <table
  align="center"
  width="100%"
  cellPadding={0}
  cellSpacing={0}
  style={{
    maxWidth: 600,
    margin: "0 auto",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    overflow: "hidden",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
  }}
>
  {/* Header with Logo */}
  <tbody>
    <tr>
      <td
        align="center"
        style={{
          padding: "30px 0",
          background: "linear-gradient(135deg, #ffffff 30%, #eaf5ff 100%)"
        }}
      >
        <img
          src="https://sellora.com/front/assets/images/logo_login.png"
          alt="Company Logo"
          style={{ display: "block", width: 160 }}
        />
      </td>
    </tr>
    {/* Greeting and OTP Info */}
    <tr>
      <td
        style={{
          padding: "35px 40px",
          color: "#333333",
          fontSize: 16,
          lineHeight: "1.6"
        }}
      >
        <p
          style={{
            marginTop: 0,
            marginBottom: 12,
            fontSize: 20,
            fontWeight: 600
          }}
        >
          Hi {name},
        </p>
        <p style={{ margin: "0 0 25px 0" }}>
          Here’s your secure OTP code to complete your verification process:
        </p>
        <p style={{ textAlign: "center", margin: "0 0 25px 0" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 6,
              color: "#ffffff",
              background: "linear-gradient(90deg, #ff512f, #f09819)",
              padding: "8px 32px",
              borderRadius: 10,
              boxShadow: "0 3px 8px rgba(0,0,0,0.15)"
            }}
          >
            {otp}
          </span>
        </p>
        <p style={{ margin: "0 0 16px 0" }}>
          This OTP is valid for a limited time only. Please do not share it with
          anyone.
        </p>
        <p style={{ margin: 0 }}>
          If you didn’t request this code, you can safely ignore this email or
          contact our support team immediately.
        </p>
      </td>
    </tr>
    {/* Divider */}
    <tr>
      <td style={{ padding: "0 40px" }}>
        <hr
          style={{
            border: "none",
            borderTop: "1px solid #eee",
            margin: "30px 0"
          }}
        />
      </td>
    </tr>
    {/* Footer */}
    <tr>
      <td
        align="center"
        style={{
          padding: 20,
          fontSize: 13,
          color: "#bbbbbb",
          backgroundColor: "#1d1d1d"
        }}
      >
        © {new Date().getFullYear()}{" "}
        <a
          href="https://sellora.com"
          style={{ color: "#bbbbbb", textDecoration: "none" }}
        >
          sellora.com
        </a>{" "}
        &nbsp;|&nbsp; All rights reserved.
      </td>
    </tr>
  </tbody>
</table>

  );
  };
  
  export default SellerLoginEmail;
  