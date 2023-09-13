
 # Image Generating App Using OpenAi API
 https://github.com/duaal/OpenAiImageGenerator/assets/40645258/33f41747-3c34-4dbe-8fa4-49d13e3a09dc

## Build with
![Typescript](https://img.shields.io/badge/Typescript-007acc?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007acc)
![React](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-092749?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4&labelColor=000000)
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Implementing tailwind with React 
 ### 1. Install Tailwind CSS
#### `npm install -D tailwindcss`
#### `npx tailwindcss init`
1. Install tailwindcss via npm.
2. Run the init command to generate your tailwind.config.js file.
### 2. Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.
````

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

````

### 3. Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
````

@tailwind base;
@tailwind components;
@tailwind utilities;

````
### 4. Start your build process
#### `npm run start`
Run your build process with npm run start.

# Building Process

### 1. Obtaining your APIKey 

Visit  [openAi](https://openai.com/ "Named link title") website and follow the next steps
* Create an account and choose API
* From your profile, choose View API Keys.
* Create an API Key and save it somewhere on your computer; `you will not be able to copy your API again`.
![tempsnip](https://github.com/duaal/OpenAiImageGenerator/assets/40645258/7aeb1c07-ed62-4cc1-9fdd-e1e61914d782)
![tempsnip2](https://github.com/duaal/OpenAiImageGenerator/assets/40645258/ebca8e6d-55ee-467f-8620-ac09a87d27c1)
![tempsnip3](https://github.com/duaal/OpenAiImageGenerator/assets/40645258/84552885-79ad-49c3-af89-f45f6c2487a3)
### 2. Image generating function

* Creating a variable to hold our key
  ````
  const apiKey = ""; //add your api key here
  ````
* Creating state variables
  ````
    //Track the prompt text
  const [prompt, setPrompt] = useState<string>();
  //setting image URL
  const [imageUrl, setImageUrl] = useState<string>("");
  //loading state
  const [loading, setLoading] = useState<Boolean>(false);
 
  ````
* Using Axios to post to theOpenAI API </br>
  installing axios and importing it  `npm install axios` `import Axios from "axios";`
  ````
  const genrateImage = async () => {
    try {
      setLoading(true);
      //using Axios to post
      const response = await Axios.post(
        " https://api.openai.com/v1/images/generations",
        { prompt: prompt, n: 1, size: "256x256" },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      
    } catch (error) {
      console.log(error);
    }
  ````
* Getting the image URL
  ````
  const genrateImage = async () => {
    try {
      setLoading(true);
      //using Axios to post
      const response = await Axios.post(
        " https://api.openai.com/v1/images/generations",
        { prompt: prompt, n: 1, size: "256x256" },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      const dataUrl = response.data.data;
      // setting the image url
    setImageUrl(dataUrl[0].url);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  ````



