import { PATH_DB } from '../constants/contacts.js';
import { readFile } from 'node:fs/promises';

export const readContacts = async () => {
  const JSON_PARSE_CONFIG = {
    encoding: 'utf8', // for adding other configurations
  };

  try {
    const data = await readFile(PATH_DB, JSON_PARSE_CONFIG);
    if (!data) return [];
    const parsedData = JSON.parse(data);
    if (!Array.isArray(parsedData)) return [];
    return parsedData;

  } catch (e) {
    console.error('File reading error: ', e);
    return [];
  }
};
