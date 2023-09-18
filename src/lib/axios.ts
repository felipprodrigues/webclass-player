import axios from "axios";

export const api = axios.create({
  baseURL: "https://webclass-player-api.vercel.app",
});
