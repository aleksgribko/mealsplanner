import config from "../config/urls";
import { getToken } from "./storage";

const api = {
  login: async (body) => {
    try {
      const res = await fetch(`${config.apiUrl}/auth/signin`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return await res.json();
    } catch (err) {
      console.error(err);
    }
  },
  signup: async (body) => {
    try {
      const res = await fetch(`${config.apiUrl}/auth/signup`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await res.json();
    } catch (err) {
      console.error(err);
    }
  },
  getFamily: async (token) => {
    try {
      const res = await fetch(`${config.apiUrl}/families`, {
        method: "GET",
        // body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      });

      return await res.json();
    } catch (err) {
      console.error(err);
    }
  },
  createFamily: async (body, token) => {
    try {
      const res = await fetch(`${config.apiUrl}/families`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      });

      return await res.json();
    } catch (err) {
      console.error(err);
    }
  },
  restoreSession: async (token) => {
    try {
      const res = await fetch(`${config.apiUrl}/auth/restoreSession`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      });

      console.log(res);

      return await res.json();
    } catch (err) {
      console.error(err);
    }
  },
  getAll: async (resource, token) => {
    console.log(resource, token)
    try {
      const res = await fetch(`${config.apiUrl}/${resource}`, {
        method: "GET",
        // body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      });

      return await res.json();
    } catch (err) {
      console.error(err);
    }
  },
  create: async (resource, token, name) => {
   
    try {
      const res = await fetch(`${config.apiUrl}/${resource}`, {
        method: "POST",
        body: JSON.stringify({ name }),
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      });
      console.log(res);
      return await res.json();
    } catch (err) {
      console.error(err);
    }
  },
};

export default api;
