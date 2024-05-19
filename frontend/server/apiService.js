
import axios from 'axios';

const NEURELO_API_KEY = "neurelo_9wKFBp874Z5xFw6ZCfvhXVR3HL4VPngYGgjpws0pYYcx6+7WBkMkz9pwE0vn8wS07jI/YyhXXcjLZc/1DhXbvgHXhVpy9E8g5pUY6NCGW1080TKKLCrlR6OctIfqvC6cNuNJt1HASQgBYDVrhgHuLRAzMYmWTYtvf71qTU9ru+Tj8exv4AKMNqMM0UsfT8oT_erPR7OoebyesrDTbF+T1iVRQKHN+SsbcjnSbnaCndxI="
const NEURELO_API_BASE_PATH="https://us-east-2.aws.neurelo.com/rest/opportunities?"
// Set up your base URL and headers for Neurelo API
// const NEURELO_API_BASE_PATH="https://us-east-2.aws.neurelo.com/rest/opportunities?filter=%7B%0A++%22tags%22%3A+%7B%0A++++%22hasEvery%22%3A+%5B%0A++++++%22Tech%22%2C%0A++++++%22Internship%22%0A++++%5D%0A++%7D%0A%7D"



const apiClient = axios.create({
  baseURL: NEURELO_API_BASE_PATH, 
  headers: {
    'X-API-KEY': NEURELO_API_KEY
  }
});

export const getDocumentsByTags = async (tags) => {
    var result = undefined;
    console.log(tags)
     if(tags.length === 1){
        const stringa = `filter=%7B%0A++%22tags%22%3A+%7B%0A++++%22hasEvery%22%3A+%5B%0A++++++%22${tags[0]}%22%0A++++%5D%0A++%7D%0A%7D` 
        
        console.log(tags)
        result  = await apiClient.get(NEURELO_API_BASE_PATH+stringa).then((response) => {
            console.log('Response:', response.data.data)
            return (response.data.data);
          }).catch((error) => {
            console.error('Error:', error);
          });
     }
    else if(tags.length === 2 ){
        const stringa = `filter=%7B%0A++%22tags%22%3A+%7B%0A++++%22hasEvery%22%3A+%5B%0A++++++%22${tags[0]}%22%2C%0A++++++%22${tags[1]}%22%0A++++%5D%0A++%7D%0A%7D`
        console.log(tags)
        result  = await apiClient.get(NEURELO_API_BASE_PATH+stringa).then((response) => {
            console.log('Response:', response.data.data)
            return (response.data.data);
          }).catch((error) => {
            console.error('Error:', error);
          });
    }


    else if(tags.length === 3 ){
        const stringa = `filter=%7B%0A++%22tags%22%3A+%7B%0A++++%22hasEvery%22%3A+%5B%0A++++++%22${tags[0]}%22%2C%0A++++++%22${tags[1]}%22%2C%0A++++++%22${tags[2]}%22%0A++++%5D%0A++%7D%0A%7D`
        console.log(tags)
        result  = await apiClient.get(NEURELO_API_BASE_PATH+stringa).then((response) => {
            console.log('Response:', response.data.data)
            return (response.data.data);
          }).catch((error) => {
            console.error('Error:', error);
          });
    }

    

        
    else{   result  = await apiClient.get(NEURELO_API_BASE_PATH).then((response) => {
            return (response.data.data);}).catch((error) => {
                console.error('Error:', error);
              });
        }

    if(result.length === 0){
        result = [{"id":"62734brsfds283842s","name": "None", "location":"", "date":"", "link":"", "description":"","tags":[]}]
    }
    return result;
    }
    
    
    

