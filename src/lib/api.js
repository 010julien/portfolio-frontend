import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3001";

// const API_URL = import.meta.env.VITE_API_URL;

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
  getAll: async () => {
    try {
      return await api.get("/projects");
    } catch (err) {
      if (err?.response?.status === 404) {
        return api.get("/api/projects");
      }
      throw err;
    }
  },
  getByStatus: async (status) => {
    try {
      return await api.get(`/projects?status=${status}`);
    } catch (err) {
      if (err?.response?.status === 404) {
        return api.get(`/api/projects?status=${status}`);
      }
      throw err;
    }
  },
};

// Skills API
export const skillsApi = {
  getAll: () =>
    api.get("/api/skills").catch((err) => {
      if (err?.response?.status === 404) {
        return api.get("/skills");
      }
      throw err;
    }),
  getByCategories: () =>
    api.get("/api/skills/by-categories").catch((err) => {
      if (err?.response?.status === 404) {
        return api.get("/skills/by-categories");
      }
      throw err;
    }),
};

// Dashboard API
export const dashboardApi = {
  getStats: () => api.get("/dashboard/stats"),
};

export default api;
