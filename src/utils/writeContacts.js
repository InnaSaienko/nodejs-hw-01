import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  const JSON_PARSE_CONFIG = {
    encoding: 'utf8', // for adding other configurations
  };

  const data = JSON.stringify(updatedContacts, null, 2);
  try {
    await writeFile(PATH_DB, data, JSON_PARSE_CONFIG);
  } catch (error) {
    console.error('Помилка читання файлу: ', error);
  }
};
