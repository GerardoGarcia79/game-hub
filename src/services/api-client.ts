import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ee3d18bdbef6408a9f530c55d1967288",
  },
});
