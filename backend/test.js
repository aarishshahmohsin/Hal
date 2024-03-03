const axios = require("axios");
const OpenAI = require("openai");

// Replace with your Flask API URL
const flaskApiUrl = "https://halmodel-3.onrender.com/predict_soil_type";
const openaiApiUrl =
  "https://api.openai.com/v1/engines/davinci-codex/completions";
const openaiApiKey = "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";

// Sample data for the Flask API
const flaskApiPayload = {
  example_list: [0.1, 0.2, 0.3], // Replace with actual values
};

const openai = new OpenAI({apiKey: openaiApiKey});

// Make the Flask API POST request
// axios.post(flaskApiUrl, flaskApiPayload)
//   .then(flaskApiResponse => {
//     // Handle the Flask API response data
//     const soilTypeResult = flaskApiResponse.data;
//     console.log("hello")
//     // Generate prompt for GPT-3 based on the Flask API response
//     const prompt = `For soil type '${soilTypeResult.soil}', the suitable crops are: ${soilTypeResult.suitableCrops.join(', ')}. What are some additional suggestions for crops suitable for this soil type?`;

//     // Make the OpenAI API request
//     return axios.post(openaiApiUrl, {
//       prompt,
//       max_tokens: 100,  // Adjust as needed
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${openaiApiKey}`,
//       },
//     });
//   })
//   .then(openaiApiResponse => {
//     // Handle the OpenAI API response
//     console.log('OpenAI Response:', openaiApiResponse.data.choices[0].text);
//   })
//   .catch(error => {
//     // Handle errors during the requests
//     console.error('Error:', error.message);
//   });

const fetchSuggestion = async (sizes) => {
  const response = await axios.post(flaskApiUrl, sizes );
  const soilTypeResult = response.data;
  return soilTypeResult
};

const runFetchSugeestion = async (ar) => {
  const response = await fetchSuggestion({ example_list: ar });
    console.log(response)
};

runFetchSugeestion([0.1, 0.2, 0.3]);