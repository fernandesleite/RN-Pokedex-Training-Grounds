import axios, { AxiosInstance } from "axios";

export const api = (): AxiosInstance => {
    const instance = axios.create({
      baseURL: "https://pokeapi.co/api/v2/"
    })
    return instance
  }