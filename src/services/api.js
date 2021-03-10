import axios from "axios";

const api = axios.create({
  baseURL: "https://senai-overflow-api-michelsouza.herokuapp.com/",
});

api.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsInN0dWRlbnROYW1lIjoiTWljaGVsIFNvdXphIiwiaWF0IjoxNjE1NDA0OTgzLCJleHAiOjE2MTU0MDg1ODN9.rbUf7MB7ajWiTaaCcmg_9pVNKR5xNZ7GyLmwi2RqfAE`;

export { api };
