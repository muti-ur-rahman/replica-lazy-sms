import React, { useState } from "react";

function FAQ() {
  // const faqs = [
  //   {
  //     question: "Do I need to sign up to use the app or website?",
  //     answer: "No, you can use the service without signing up.",
  //   },
  //   {
  //     question: "What is a Premium Number?",
  //     answer:
  //       "Premium numbers offer exclusive benefits such as faster updates.",
  //   },
  //   {
  //     question: "How many regions are supported to unlock premium numbers?",
  //     answer: "We currently support regions from the US, Canada, UK, and more.",
  //   },
  //   {
  //     question: "Can I rent monthly numbers?",
  //     answer: "Yes, monthly rental options are available.",
  //   },
  //   {
  //     question: "How do I contact support?",
  //     answer:
  //       "You can reach out to our support team through the Contact Us page.",
  //   },
  // ];

  // const [openIndex, setOpenIndex] = useState(null);

  // const toggleFAQ = (index) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };

  return (
    <>
      {/* <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="p-4 text-lg font-semibold text-gray-700 cursor-pointer flex justify-between items-center">
                  {faq.question}
                  <span>{openIndex === index ? "−" : "+"}</span>
                </h3>
                {openIndex === index && (
                  <p className="p-4 text-gray-600 border-t border-gray-200">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-4 mb-12 bg-inherit">
        <h1 className="font-extrabold text-[#475467] text-3xl py-8 text-center ">
          Frequently Asked Questions
        </h1>
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
              -We do not restrict any incoming SMS, if you are not receiving any
              SMS, maybe it is a limitation placed by the mobile operator. Try
              another number instead.
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
              -We do not restrict any incoming SMS, if you are not receiving any
              SMS, maybe it is a limitation placed by the mobile operator. Try
              another number instead.
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
              -We do not restrict any incoming SMS, if you are not receiving any
              SMS, maybe it is a limitation placed by the mobile operator. Try
              another number instead.
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
              -We do not restrict any incoming SMS, if you are not receiving any
              SMS, maybe it is a limitation placed by the mobile operator. Try
              another number instead.
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
              -We do not restrict any incoming SMS, if you are not receiving any
              SMS, maybe it is a limitation placed by the mobile operator. Try
              another number instead.
              <br />
              <br />
            </p>
          </details>
          <hr className="text-[#D0D5DD] w-full" />
        </div>
        {/* faq-2 */}
      </section>
    </>
  );
}

export default FAQ;
