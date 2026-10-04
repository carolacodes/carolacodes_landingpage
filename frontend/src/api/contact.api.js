import api from "./axios";

export async function sendProjectForm(data) {
  const response = await api.post("/contact", data);
  return response.data;
}