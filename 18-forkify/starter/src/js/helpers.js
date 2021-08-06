import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    // // 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcfb2'
    // `${API_URL}/${id}`

    const data = await res.json();
    if (!res.ok)
      throw new Error(
        `\nError message: ${data.message} \nStatus code: ${res.status}`
      );
    return data;
  } catch (err) {
    // throw `${err} 'from here to there 💩🔥'`;
    throw err;
  }
};
