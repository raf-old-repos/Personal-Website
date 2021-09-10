import axios from "axios";

export const fetcher = async (...args: Parameters<typeof axios.get>) => await axios.get(...args)