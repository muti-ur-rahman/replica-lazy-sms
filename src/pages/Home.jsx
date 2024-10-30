// import axios from "axios";
import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import HomeFAQ from "../components/HomeFAQ.jsx";
import HomeDetails from "./../components/HomeDetails";
function Home() {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const getPosts = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts/"
  //     );
  //     if (response.status === 200) {
  //       setPosts(response.data);
  //       toast("Data successfully fetched");
  //     }
  //   } catch (error) {
  //     setError("Error fetching data");
  //     toast.error("Error fetching data");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <section className="flex flex-col items-center mt-[88px] ">
        <div className="sm:h-[22rem] h-auto text-center bg-[#EBE9FE]">
          <h1 class=" text-[46px] font-bold text-[#475467] mt-4 pb-4">
            Receive SMS &nbsp;
            <span class="relative text-[#E100FF] text-[46px] font-bold">
              Online Free
              <span class="absolute -bottom-2 left-0 text-[#E100FF] hidden md:block">
                {/* <img src="./images/da.svg" alt="" loading="lazy" /> */}
                <svg
                  width="241"
                  height="15"
                  viewBox="0 0 241 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_868_10003)">
                    <path
                      fill-rule="evenodd"
                      clipRule="evenodd"
                      d="M143.848 6.48483C111.882 6.72908 79.9258 7.74321 48.0083 9.52635C32.8666 10.3762 15.2828 10.2697 0.597522 13.1693C-0.134714 13.3153 0.00524277 13.7524 0.0204554 13.796C0.0529091 13.8863 0.185766 14.1845 0.768918 14.1987C0.831797 14.2007 1.27804 14.1581 1.44943 14.1449C5.78605 13.7697 10.1075 13.3315 14.4471 12.9776C29.4306 11.7504 44.4576 10.8225 59.507 10.0091C79.4833 8.93001 99.6299 8.35497 119.66 7.90468C130.623 7.65823 141.849 7.98581 152.848 7.47771C156.886 7.46249 160.926 7.46047 164.964 7.46858C181.848 7.50915 198.713 7.93003 215.569 8.5071C220.988 8.69269 225.122 8.89248 230.428 9.02838C233.408 9.09104 236.387 9.13093 239.367 9.14806C239.403 9.15233 239.439 9.15402 239.475 9.15313C239.609 9.15313 239.672 9.14704 239.685 9.14704C240.438 9.07402 240.368 8.60446 240.35 8.53347C240.346 8.51927 240.232 8.12374 239.583 8.10853C239.428 8.10447 238.316 8.10041 237.889 8.09635C235.677 8.07303 232.493 8.03753 230.488 7.98784C225.192 7.85194 221.061 7.65316 215.651 7.46655C198.77 6.88948 181.88 6.46657 164.97 6.42702C162.905 6.42296 160.837 6.42093 158.772 6.42296C158.702 6.3043 158.546 6.17043 158.205 6.11262C157.884 6.05786 155.594 6.01019 154.71 5.96253C148.169 5.60756 148.362 5.62481 141.166 5.33475C130.265 4.8946 128.605 4.79521 117.267 4.60961C96.6746 4.27189 76.0716 4.29928 55.4747 4.33274C45.3065 4.351 34.4193 4.80332 24.096 3.95953C27.4976 3.69584 30.9123 3.50517 34.3209 3.28611C45.9596 2.53968 57.6064 2.07721 69.2928 1.75166C97.3247 0.972774 125.399 0.662436 153.421 1.72529C147.456 1.76282 141.494 1.85004 135.53 1.90683C111.249 2.14009 86.7346 1.96464 62.5039 3.17557C62.0698 3.19889 61.7433 3.4494 61.7757 3.73336C61.8072 4.02139 62.1915 4.2364 62.6246 4.2151C86.8229 3.00519 111.303 3.18165 135.552 2.94839C144.561 2.8632 153.567 2.70905 162.576 2.75468C165.667 2.77091 168.759 2.84596 171.85 2.87131C172.462 2.8774 174.037 2.95651 174.261 2.92304C174.759 2.85002 174.867 2.60864 174.898 2.48998C174.914 2.41899 174.965 2.01028 174.204 1.86424C169.016 0.868314 159.44 0.913952 154.396 0.718216C126.03 -0.385209 97.6056 -0.0779132 69.2259 0.710102C57.5121 1.03768 45.8359 1.50116 34.1658 2.25064C30.0888 2.51128 26.0016 2.73541 21.9419 3.08226C21.2857 3.13804 19.8121 3.21918 19.1002 3.30538C18.8938 3.32493 18.6899 3.36536 18.4917 3.42607C18.1215 3.56298 18.0556 3.76379 18.0556 3.89868C18.0515 4.00314 18.1184 4.37027 18.8943 4.46966C30.7196 5.99295 43.5865 5.3956 55.4787 5.3743C76.0624 5.34084 96.6492 5.31345 117.23 5.65117C128.539 5.83677 130.192 5.93514 141.07 6.37428L143.848 6.48483Z"
                      fill="#E100FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_868_10003">
                      <rect width="240.36" height="14.1985" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </span>
          </h1>
          <p className="text-pretty md:px-[100px] px-8 my-4 md:mx-12 m-auto font-normal text-justify lg:text-center leading-7 ">
            Receive SMS Verification Online in a real physical SIM card. LazySMS
            is Free and no signup needed. Open any country and your chosen
            number to view the SMS received. We also have disposable fresh
            numbers that you can privately buy and verify any account for a
            cheap price. Join our groups to earn free reward coins.
          </p>
          <h1 className="text-center text-gray-600 font-bold py-0 items-center justify-center text-base">
            Join Groups
          </h1>
          <div className="flex gap-1 py-2 justify-center sm:mb-4 ">
            <img src="./images/facebook.png" alt="Logo" className="h-12" />
            <img src="./images/telegram (1).png" alt="Logo" className="h-12" />
          </div>
        </div>
      </section>
      <HomeDetails />
      <HomeFAQ />
    </>
  );
}

export default Home;
