const axios = require('axios');
const axiosRetry = require('axios-retry');

const client = axios.create({
  baseURL: 'https://coderbyte.com/api/challenges/json/json-cleaning',
  headers: {
    'Content-Type': 'application/json'
  }
});

(async () => {
  try {
    const res = await client.get();
    if (res.data) {
      res.data = cleanJson(res.data);
      console.log(res.data);
    }
  } catch (err) {
    console.log(err);
  }
})();

function cleanJson(resp) {
  let data;
  for (const x in resp) {
    data = resp[x];

    if (
      data === 'null' ||
      data === null ||
      data === '-' ||
      data === 'N/A' ||
      typeof data === 'undefined' ||
      (data instanceof Object && Object.keys(data).length == 0)
    ) {
      delete resp[x];
    }

    if (data instanceof Object) {
      data = cleanJson(data);
    }
  }

  return resp;
}
