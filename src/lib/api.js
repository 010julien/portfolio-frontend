import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3001/api";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// export const api = axios.create({
//   baseURL: `${API_URL}/api`, // <-- IMPORTANT
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// Projects API
export const projectsApi = {
  getAll: () => api.get("/projects"),
  getByStatus: (status) => api.get(`/projects?status=${status}`),
};

// Skills API
export const skillsApi = {
  getAll: () => api.get("/skills"),
  getByCategories: () => api.get("/skills/by-categories"),
};

// Dashboard API
export const dashboardApi = {
  getStats: () => api.get("/dashboard/stats"),
};

export default api;
