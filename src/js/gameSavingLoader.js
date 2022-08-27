import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const data = await read();
        const value = await json(data);
        resolve(value);
      } catch (e) {
        reject(e);
      }
    });
  }
}
