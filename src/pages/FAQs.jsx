import React from "react";
// import Navbar from "../components/Header/Navbar";
// import Footer from "../components/Footer/Footer";

function FAQs() {
  return (
    <>
      <div className="mt-[88px] min-h-screen m-0 w-full bg-[#EBE9FE] P-8 ">
        <section className="bg-[#EBE9FE] shadow-lg w-5/5 px-4 pb-8 pt-10  flex justify-between flex-col">
          <h1 className="font-extrabold text-[#475467] text-3xl py-8 text-center ">
            Frequently Asked Questions
          </h1>
          <div className="text-[#475467] bg-white shadow-lg sm:w-9/12 w-full rounded-md ml-auto mr-auto">
            <details className="open:text-[#7F00FF] rounded py-1 px-3 relative bg-none open:bg-white duration-300">
              <summary className="list-none font-medium text-[19px] leading-[30px] relative cursor-pointer pr-7 ">
                Will my balance expire if I don’t use it for some time?
                <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="{1.5}"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    ></path>
                  </svg>
                </div>
              </summary>
              <p className="text-base font-normal pt-2 text-[rgb(71,84,103)]">
                -If you have not bought any service or used your balance in the
                last 12 months, your account balance will expire and there will
                be no refunds. Your balance will carry over as long as you top
                up before your last top up expires or buy any service using your
                balance.
                <br />
                <br />
              </p>
            </details>
            <hr className="text-[#D0D5DD] w-full" />
          </div>
          {/* faq-2 */}
          <div className="text-[#475467] bg-white shadow-lg sm:w-9/12 w-full rounded-md ml-auto mr-auto">
            <details className="open:text-[#7F00FF] rounded py-1 px-3 relative bg-none open:bg-white duration-300">
              <summary className="list-none font-medium text-[19px] leading-[30px] relative cursor-pointer pr-7 ">
                Does a Number have any restrictions?
                <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="{1.5}"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    ></path>
                  </svg>
                </div>
              </summary>
              <p className="text-base font-normal pt-2 text-[rgb(71,84,103)]">
                -We do not restrict any incoming SMS, if you are not receiving
                any SMS, maybe it is a limitation placed by the mobile operator.
                Try another number instead.
                <br />
                <br />
              </p>
            </details>
            <hr className="text-[#D0D5DD] w-full" />
          </div>
          {/* faq-2 */}
          <div className="text-[#475467] bg-white shadow-lg sm:w-9/12 w-full rounded-md ml-auto mr-auto">
            <details className="open:text-[#7F00FF] rounded py-1 px-3 relative bg-none open:bg-white duration-300">
              <summary className="list-none font-medium text-[19px] leading-[30px] relative cursor-pointer pr-7 ">
                What countries are currently available?
                <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="{1.5}"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    ></path>
                  </svg>
                </div>
              </summary>
              <p className="text-base font-normal pt-2 text-[rgb(71,84,103)]">
                -Currently supported countries are: USA, Canada, Uk, Australia,
                Germany, France, Russia, Netherlands, Bangladesh, Lithuania,
                Nigeria, Sweden and we will try to add more.
                <br />
                <br />
              </p>
            </details>
            <hr className="text-[#D0D5DD] w-full" />
          </div>
          <div className="text-[#475467] bg-white shadow-lg sm:w-9/12 w-full rounded-md ml-auto mr-auto">
            <details className="open:text-[#7F00FF] rounded py-1 px-3 relative bg-none open:bg-white duration-300">
              <summary className="list-none font-medium text-[19px] leading-[30px] relative cursor-pointer pr-7 ">
                Will my balance expire if I don’t use it for some time?
                <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="{1.5}"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    ></path>
                  </svg>
                </div>
              </summary>
              <p className="text-base font-normal pt-2 text-[rgb(71,84,103)]">
                -If you have not bought any service or used your balance in the
                last 12 months, your account balance will expire and there will
                be no refunds. Your balance will carry over as long as you top
                up before your last top up expires or buy any service using your
                balance.
                <br />
                <br />
              </p>
            </details>
            <hr className="text-[#D0D5DD] w-full" />
          </div>

          {/* faq-2 */}
          <div className="text-[#475467] bg-white shadow-lg sm:w-9/12 w-full rounded-md ml-auto mr-auto">
            <details className="open:text-[#7F00FF] rounded py-1 px-3 relative bg-none open:bg-white duration-300">
              <summary className="list-none font-medium text-[19px] leading-[30px] relative cursor-pointer pr-7 ">
                Does a Number have any restrictions?
                <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="{1.5}"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    ></path>
                  </svg>
                </div>
              </summary>
              <p className="text-base font-normal pt-2 text-[rgb(71,84,103)]">
                -We do not restrict any incoming SMS, if you are not receiving
                any SMS, maybe it is a limitation placed by the mobile operator.
                Try another number instead.
                <br />
                <br />
              </p>
            </details>
            <hr className="text-[#D0D5DD] w-full" />
          </div>
          {/* faq-2 */}
          <div className="text-[#475467] bg-white shadow-lg sm:w-9/12 w-full rounded-md ml-auto mr-auto">
            <details className="open:text-[#7F00FF] rounded py-1 px-3 relative bg-none open:bg-white duration-300">
              <summary className="list-none font-medium text-[19px] leading-[30px] relative cursor-pointer pr-7 ">
                What countries are currently available?
                <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="{1.5}"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    ></path>
                  </svg>
                </div>
              </summary>
              <p className="text-base font-normal pt-2 text-[rgb(71,84,103)]">
                -Currently supported countries are: USA, Canada, Uk, Australia,
                Germany, France, Russia, Netherlands, Bangladesh, Lithuania,
                Nigeria, Sweden and we will try to add more.
                <br />
                <br />
              </p>
            </details>
            <hr className="text-[#D0D5DD] w-full" />
          </div>

          <div className="text-[#475467] bg-white shadow-lg sm:w-9/12 w-full rounded-md ml-auto mr-auto">
            <details className="open:text-[#7F00FF] rounded py-1 px-3 relative bg-none open:bg-white duration-300">
              <summary className="list-none font-medium text-[19px] leading-[30px] relative cursor-pointer pr-7 ">
                Will my balance expire if I don’t use it for some time?
                <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="{1.5}"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    ></path>
                  </svg>
                </div>
              </summary>
              <p className="text-base font-normal pt-2 text-[rgb(71,84,103)]">
                -If you have not bought any service or used your balance in the
                last 12 months, your account balance will expire and there will
                be no refunds. Your balance will carry over as long as you top
                up before your last top up expires or buy any service using your
                balance.
                <br />
                <br />
              </p>
            </details>
            <hr className="text-[#D0D5DD] w-full" />
          </div>

          {/* faq-2 */}
          <div className="text-[#475467] bg-white shadow-lg sm:w-9/12 w-full rounded-md ml-auto mr-auto">
            <details className="open:text-[#7F00FF] rounded py-1 px-3 relative bg-none open:bg-white duration-300">
              <summary className="list-none font-medium text-[19px] leading-[30px] relative cursor-pointer pr-7 ">
                Does a Number have any restrictions?
                <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="{1.5}"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    ></path>
                  </svg>
                </div>
              </summary>
              <p className="text-base font-normal pt-2 text-[rgb(71,84,103)]">
                -We do not restrict any incoming SMS, if you are not receiving
                any SMS, maybe it is a limitation placed by the mobile operator.
                Try another number instead.
                <br />
                <br />
              </p>
            </details>
            <hr className="text-[#D0D5DD] w-full" />
          </div>
          {/* faq-2 */}
          <div className="text-[#475467] bg-white shadow-lg sm:w-9/12 w-full rounded-md ml-auto mr-auto">
            <details className="open:text-[#7F00FF] rounded py-1 px-3 relative bg-none open:bg-white duration-300">
              <summary className="list-none font-medium text-[19px] leading-[30px] relative cursor-pointer pr-7 ">
                What countries are currently available?
                <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="{1.5}"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    ></path>
                  </svg>
                </div>
              </summary>
              <p className="text-base font-normal pt-2 text-[rgb(71,84,103)]">
                -Currently supported countries are: USA, Canada, Uk, Australia,
                Germany, France, Russia, Netherlands, Bangladesh, Lithuania,
                Nigeria, Sweden and we will try to add more.
                <br />
                <br />
              </p>
            </details>
            <hr className="text-[#D0D5DD] w-full" />
          </div>
          {/* faq-2 */}
          <div className="text-[#475467] bg-white shadow-lg sm:w-9/12 w-full rounded-md ml-auto mr-auto">
            <details className="open:text-[#7F00FF] rounded py-1 px-3 relative bg-none open:bg-white duration-300">
              <summary className="list-none font-medium text-[19px] leading-[30px] relative cursor-pointer pr-7 ">
                What countries are currently available?
                <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="{1.5}"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    ></path>
                  </svg>
                </div>
              </summary>
              <p className="text-base font-normal pt-2 text-[rgb(71,84,103)]">
                -Currently supported countries are: USA, Canada, Uk, Australia,
                Germany, France, Russia, Netherlands, Bangladesh, Lithuania,
                Nigeria, Sweden and we will try to add more.
                <br />
                <br />
              </p>
            </details>
            <hr className="text-[#D0D5DD] w-full" />
          </div>

          <div className="text-[#475467] bg-white shadow-lg sm:w-9/12 w-full rounded-md ml-auto mr-auto">
            <details className="open:text-[#7F00FF] rounded py-1 px-3 relative bg-none open:bg-white duration-300">
              <summary className="list-none font-medium text-[19px] leading-[30px] relative cursor-pointer pr-7 ">
                Will my balance expire if I don’t use it for some time?
                <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="{1.5}"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    ></path>
                  </svg>
                </div>
              </summary>
              <p className="text-base font-normal pt-2 text-[rgb(71,84,103)]">
                -If you have not bought any service or used your balance in the
                last 12 months, your account balance will expire and there will
                be no refunds. Your balance will carry over as long as you top
                up before your last top up expires or buy any service using your
                balance.
                <br />
                <br />
              </p>
            </details>
            <hr className="border-t border-[#D0D5DD] w-full" />
          </div>
        </section>
      </div>
    </>
  );
}

export default FAQs;
