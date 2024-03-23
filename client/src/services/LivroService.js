import http from "../commons/http-common";

const getAll = () => {
  return http.get("/v1/livros");
};

const get = id => {
  return http.get(`/v1/livros/${id}`);
};

const create = data => {
  return http.post("/v1/livros", data);
};

const update = (id, data) => {
  return http.put(`/v1/livros/${id}`, data);
};


const remove = id => {
  return http.delete(`/v1/livros/${id}`);
};

const removeAll = () => {
  return http.delete(`/v1/livros`);
};

const findById = id => {
  return http.get(`/v1/livros?id=${id}`);
};

const LivrosService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findById
};

export default LivrosService;
