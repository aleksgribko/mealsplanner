import config from "../config/urls";
import { getToken } from "./storage";

const api = {
  login: async (body) => {
    console.log("BODY", body);
    try {
      const res = await fetch(`${config.apiUrl}/auth/signin`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return res && res.ok ? await res.json() : false;
    } catch (err) {
      console.error(err);
    }
  },
  signup: async (body) => {
    console.log("BODY", body);
    try {
      const res = await fetch(`${config.apiUrl}/auth/signup`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res;
    } catch (err) {
      console.error(err);
    }
  },
  getFamily: async (familyId) => {
    try {
      const res = await fetch(`${config.apiUrl}/family/${familyId}`, {
        method: "GET",
        // body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("WHAT IS MY FAMILY!", familyId, res);

      return res && res.ok ? await res.json() : false;
    } catch (err) {
      console.error(err);
    }
  },
  createFamily: async (body) => {
    try {
      const res = await fetch(`${config.apiUrl}/family`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return res && res.ok ? await res.json() : false;
    } catch (err) {
      console.error(err);
    }
  },
  // restoreSession: async (token) => {
  //   try {
  //     const res = await fetch(`${config.apiUrl}/auth/restore-session`, {
  //       method: "GET",
  //       body: JSON.stringify({ token }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     return res && res.ok ? await res.json() : false;
  //   } catch (err) {
  //     console.error(err);
  //     return false;
  //   }
  // },

  // get: async (resource, oneResourceId = false, query, withAuth = false) => {
  //   try {
  //     let headers = {
  //       "Content-Type": "application/json",
  //     };

  //     if (withAuth) {
  //       headers["Authorization"] = "Bearer " + (await getToken());
  //     }

  //     const res = await fetch(
  //       `${config.apiUrl}/${resource}${
  //         oneResourceId ? "/" + oneResourceId : ""
  //       }${query ? query : ""}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           ...headers,
  //         },
  //       }
  //     );

  //     return res && res.ok ? await res.json() : false;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // },
  // create: async (resource, body) => {
  //   try {
  //     const res = await fetch(`${config.apiUrl}/${resource}`, {
  //       method: "POST",
  //       body: JSON.stringify(body),
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + (await getToken()),
  //       },
  //     });
  //     return res && res.ok ? await res.json() : false;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // },
  // update: async (resource, oneResourceId, body, token) => {
  //   try {
  //     const res = await fetch(
  //       `${config.apiUrl}/${resource}${
  //         oneResourceId ? "/" + oneResourceId : ""
  //       }`,
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(body),
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: "Bearer " + (token || (await getToken())),
  //         },
  //       }
  //     );
  //     return res && res.ok ? await res.json() : false;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // },
  // delete: async (resource, body) => {
  //   try {
  //     const res = await fetch(`${config.apiUrl}/${resource}`, {
  //       method: "DELETE",
  //       body: JSON.stringify(body),
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + (await getToken()),
  //       },
  //     });
  //     return res && res.ok ? await res.json() : false;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // },
};

export default api;
