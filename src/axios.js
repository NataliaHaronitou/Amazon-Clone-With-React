import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: 'https://us-central1-react-clone-32c0d.cloudfunctions.net/api'
    // "http://localhost:5001/react-clone-32c0d/us-central1/api"
});

export default instance;

