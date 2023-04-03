import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    //key: "c7b18323a47d40c394ea5b019646b1f5",
    key: "c6169202ee4241bd9959bdd7eea85794",
  },
});
