import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID XxWT3HaTtwBMeS_RV0FFIU7IQ1AkCw9yEn6KwAr1caU"
    }
})