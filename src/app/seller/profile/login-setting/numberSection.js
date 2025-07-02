"use client";
import React, { useEffect, useRef } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";

function NumberSection({ mobileData, setMobileData }) {
  const phoneInputRef = useRef(null);
  const itiRef = useRef(null);
  const onCountryChangeRef = useRef(null);

  useEffect(() => {
    if (phoneInputRef.current && !itiRef.current) {
      itiRef.current = intlTelInput(phoneInputRef.current, {
        initialCountry:
          mobileData?.country_s_name ? mobileData.country_s_name : "us",
        separateDialCode: true,
        // utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js',
      });

      onCountryChangeRef.current = () => {
        const selectedCountryData =
          itiRef.current.getSelectedCountryData();
        setMobileData((prev) => ({
          ...prev,
          mobile_code: selectedCountryData.dialCode,
          country_s_name: selectedCountryData.iso2,
        }));
      };

      phoneInputRef.current.addEventListener(
        "countrychange",
        onCountryChangeRef.current
      );
    }

    return () => {
      if (
        phoneInputRef.current &&
        onCountryChangeRef.current
      ) {
        phoneInputRef.current.removeEventListener(
          "countrychange",
          onCountryChangeRef.current
        );
      }
      if (itiRef.current) {
        itiRef.current.destroy();
        itiRef.current = null;
      }
    };
  }, []); // run only once

  return (
    <>
      <input
        type="text"
        value={mobileData.mobile || ""}
        onChange={(e) => {
          const value = e.target.value;
          setMobileData((prev) => ({
            ...prev,
            mobile: value,
          }));
        }}
        ref={phoneInputRef}
        id="mobile_code"
      />
    </>
  );
}

export default NumberSection;
