import axios from "axios";

export const api = axios.create({
  baseURL: "https://the-miracle-tutorial-backend.herokuapp.com/api/",
});
