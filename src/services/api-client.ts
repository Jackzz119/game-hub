import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c3884b54794745ddbb99e90b07dce9d7",
  },
});
