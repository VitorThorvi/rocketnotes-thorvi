/*
* this file saves axios npm package configs
* */
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333"
});
