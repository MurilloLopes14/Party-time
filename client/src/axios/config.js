import axios from "axios";

const partyFetch = axios.create({
  baseURL: "http://localhost:3000/partytime/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default partyFetch;
