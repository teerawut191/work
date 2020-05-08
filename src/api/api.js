import axios from "axios";

const url = "http://203.154.59.14:3000/api/v1";

export const getAllUser = () => {
  return new Promise((resolve, reject) => {
    axios.get(url + "/users").then((res) => {
      resolve(res.data);
    });
  });
};
export const getAllProduct = () => {
  return new Promise((resolve, reject) => {
    axios.get(url + "/products").then((res) => {
      resolve(res.data);
    });
  });
};

export const getAllByIdUser = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(url + "/users/" + id).then((res) => {
      resolve(res.data);
    });
  });
};

export const getAllProductId = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(url + "/products/" + id).then((res) => {
      resolve(res.data);
    });
  });
};

export const createUser = (user) => {
  return new Promise((resolve, reject) => {
    axios.post(url + "/users", user).then((res) => {
      resolve(res.data);
    });
  });
};

export const createProduct = (user) => {
  return new Promise((resolve, reject) => {
    axios.post(url + "/products", user).then((res) => {
      resolve(res.data);
    });
  });
};

export const editUser = (id, user) => {
  return new Promise((resolve, reject) => {
    axios.put(url + "/users/" + id, user).then((res) => {
      resolve(res.data);
    });
  });
};

export const editProduct = (id, user) => {
  return new Promise((resolve, reject) => {
    axios.put(url + "/products/" + id, user).then((res) => {
      resolve(res.data);
    });
  });
};

export const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    axios.delete(url + "/users/" + id).then((res) => {
      resolve(res.data);
    });
  });
};

export const deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    axios.delete(url + "/products/" + id).then((res) => {
      resolve(res.data);
    });
  });
};

export const register = (user) => {
  return new Promise((resolve, reject) => {
    axios.post(url + "/register", user).then((res) => {
      resolve(res.data);
    });
  });
};

export const loginTest = (user) => {
  return new Promise((resolve, reject) => {
    axios.post(url + "/login", user).then((res) => {
      resolve(res.data);
    });
  });
};

