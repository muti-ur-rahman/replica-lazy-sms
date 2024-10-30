import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background:
          "linear-gradient(59.39deg, rgb(127, 0, 255) 0%, rgb(225, 0, 255) 100%)",
        text: "bold",
      }}
      // className="py-4 text-white text-sm"
      className="footer mt-5 w-full text-[#FCFCFD]"
    >
      {/* Main Content Wrapper with Conditional Width and Padding */}
      <div className="max-w-[90%] lg:px-0 mx-auto flex flex-col items-center text-[#fcfcfd49] ">
        {/* Top Section: Logo and Social Links */}
        <div className="flex flex-row justify-between items-center w-full px-10 py-4">
          {/* Left Side: Logo and Title */}
          <div className="flex items-center ">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 500.000000 500.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                fill="#fff"
                stroke="none"
              >
                <path
                  d="M337 4989 c-155 -36 -290 -173 -326 -330 -7 -29 -11 -815 -11 -2299
0 -2233 0 -2255 20 -2288 44 -72 142 -93 204 -44 15 11 190 177 389 369 199
191 396 381 438 420 l75 73 1740 0 c1904 0 1795 -3 1908 58 99 53 182 161 212
276 11 42 14 337 14 1713 0 1194 -3 1677 -11 1715 -36 167 -176 307 -338 338
-68 13 -4259 12 -4314 -1z m4303 -294 c21 -12 44 -39 58 -65 l22 -44 0 -1642
0 -1641 -23 -43 c-13 -25 -37 -51 -57 -61 -33 -18 -100 -19 -1813 -19 -1472 0
-1783 -2 -1810 -14 -18 -7 -189 -164 -382 -349 l-350 -337 -3 2051 c-2 2000
-2 2052 17 2094 21 47 53 73 104 85 17 5 970 7 2117 7 2073 -2 2085 -2 2120
-22z"
                />
                <path
                  d="M3265 3813 l-75 -98 135 -3 c74 -1 135 -5 135 -8 0 -2 -65 -97 -145
-210 l-146 -206 3 -66 c2 -46 7 -67 16 -66 6 1 108 2 226 3 l214 1 76 105 c41
57 72 107 67 109 -5 3 -71 3 -146 0 -113 -5 -137 -3 -133 8 3 7 67 102 142
210 l136 197 0 61 0 60 -215 0 -214 0 -76 -97z"
                />
                <path
                  d="M2426 3568 c-18 -29 -54 -87 -80 -128 l-46 -75 195 -5 196 -5 -206
-295 -206 -294 3 -81 3 -80 321 -3 c287 -2 323 -1 335 14 27 33 147 249 142
257 -3 5 -95 5 -204 1 -127 -4 -199 -3 -199 3 0 5 90 142 200 303 l201 293 -3
71 -3 71 -308 3 -307 2 -34 -52z"
                />
                <path
                  d="M1373 3218 c-14 -18 -143 -271 -143 -280 0 -5 112 -8 250 -8 l249 0
-111 -157 c-61 -87 -182 -260 -269 -385 l-159 -228 0 -90 0 -90 428 0 428 0
77 160 76 160 -265 0 c-145 0 -264 3 -264 6 0 5 120 182 383 564 l137 200 0
80 0 80 -404 0 c-311 0 -406 -3 -413 -12z"
                />
              </g>
            </svg>
            {/* <img src="./images/logo01.png" alt="Logo" className="h-14 mr-2" /> */}
            <span className="text-[#FCFCFD] mx-1 font-medium text-xl">
              LazySMS
            </span>
          </div>
          {/* Right Side: Social Links */}
          <div className="flex flex-col items-start mt-0">
            <h1 className=" mb-2 text-[#FCFCFD] font-medium text-pretty">
              Join Groups
            </h1>
            <div className="flex space-x-2">
              <img
                src="./images/facebook.png"
                alt="Facebook"
                className="h-10"
              />
              <img
                src="./images/telegram (1).png"
                alt="Telegram"
                className="h-10"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="lg:w-11/12 w-10/12 border-t border-[#fcfcfd49] my-1" />

        {/* Bottom Section: Copyright and Privacy */}
        <div className="flex flex-row justify-between items-center w-full px-8 py-2 text-[#FCFCFD] font-medium text-pretty">
          <p>©2023 LazySMS. All rights reserved.</p>
          <a href="/privacy-terms" className="hover:underline mt-0 py-2">
            Privacy and Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
