import React, { useState } from "react";
import Axios from "axios";
import cat from "./asset/cat.png";

function Generator() {
  const apiKey = ""; //add your api key here
  // track the prompt text
  const [prompt, setPrompt] = useState<string>();
  //setting image url
  const [imageUrl, setImageUrl] = useState<string>("");
  //loading state
  const [loading, setLoading] = useState<Boolean>(false);
  // image generating functionion
  const genrateImage = async () => {
    try {
      setLoading(true);
      //using Axios to post
      const respone = await Axios.post(
        " https://api.openai.com/v1/images/generations",
        { prompt: prompt, n: 1, size: "256x256" },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      const dataUrl = respone.data.data;
      // getting the image url
      console.log(dataUrl[0].url);
      // setting the image url
      await setImageUrl(dataUrl[0].url);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex  items-center w-full flex-col h-full">
      {imageUrl == "" ? (
        <img src={cat} alt="space cat" />
      ) : (
        <img src={imageUrl} />
      )}

      <div className="w-max h-fit my-8">
        <h1
          className="animate-typing delay-300  overflow-hidden whitespace-nowrap text-xl   pr-2 md:text-2xl font-bold
        text-transparent  bg-clip-text bg-gradient-to-r from-green-400 to-blue-600"
        >
          Generating image using AI
          <span className="text-sm text-blue-800 font-normal px-2">
            Powered by OpenAI
          </span>
        </h1>
      </div>
      <div className="flex justify-center w-full">
        <input
          type="text"
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
          placeholder="Add A Description"
          className="border-solid border-2 border-sky-200 py-2 px-4 w-full  rounded-full"
        />
      </div>
      {!loading && (
        <div
          onClick={genrateImage}
          className="cursor-pointer p-2 bg-sky-800 text-white w-full shadow font-bold rounded-full text-center mt-4"
        >
          <h1>Generate</h1>
        </div>
      )}
      {loading && (
        <div className="flex items-center justify-center p-2 bg-sky-800 text-white w-full shadow font-bold rounded-full text-center mt-4">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mx-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="white"
            />
          </svg>
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
}

export default Generator;
