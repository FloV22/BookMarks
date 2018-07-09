export default (status, response) => {
  return new Promise(resolve => {
    resolve({
      status,
      json: () => JSON.parse(response)
    });
  });
};
