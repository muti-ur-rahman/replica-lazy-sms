import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      if (response.status === 200) {
        setPosts(response.data);
        toast("Data successfully fetched");
      }
    } catch (error) {
      setError("Error fetching data");
      toast.error("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center w-full h-screen mt-50">
        <p className="text-base md:px-[100px] px-8 my-12 md:mx-12 m-auto font-normal text-justify lg:text-center leading-7">
          Receive SMS Verification Online in a real physical SIM card. LazySMS
          is Free and no signup needed. Open any country and your chosen number
          to view the SMS received. We also have disposable fresh numbers that
          you can privately buy and verify any account for a cheap price. Join
          our groups to earn free reward coins.
        </p>
        <button
          className="bg-purple-600 p-4 outline-none rounded-full text-white"
          onClick={getPosts}
        >
          Get Data
        </button>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div>
          {posts.map((post) => (
            <div key={post.id} className="p-4 border-b">
              <h3 className="font-bold">{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
