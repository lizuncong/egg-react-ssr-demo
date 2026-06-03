import createAxios from './createAxios';

const getServerBaseURL = () => `http://127.0.0.1:${process.env.PORT || 7001}`;

const serverAxios = (ctx) => createAxios({
  baseURL: getServerBaseURL(),
}, ctx);

const clientAxios = createAxios({
  baseURL: '/',
});

const request = clientAxios;

export {
  clientAxios,
  request,
  serverAxios,
};
