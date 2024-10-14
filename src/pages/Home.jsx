import axios from "axios";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

function Home() {
  async function getPosts() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      console.log(response.data);
      if (response.status == 200) {
        toast("data successfully fetched");
      }
    } catch (error) {
      console.log(error);
      toast("error fetching data");
    }
  }
  return (
    <>
      <Navbar />
      <div className="w-full h-[{445px}] mx-auto text-center">
        <p className="text-base md:px-[100px] px-8 my-12 md:mx-12 m-auto font-normal text-justify lg:text-center leading-7	">
          Receive SMS Verification Online in a real physical SIM card. LazySMS
          is Free and no signup needed. Open any country and your chosen number
          to view the SMS received. We also have disposable fresh numbers that
          you can privately buy and verify any account for cheap price. Join our
          groups to earn free reward coins.
        </p>
        <button
          className="bg-purple-600 p-4 outline-none rounded-full text-white"
          onClick={getPosts}
        >
          get data
        </button>
      </div>

      <Footer />
    </>
  );
}

export default Home;
