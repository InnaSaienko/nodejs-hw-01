import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  let contacts = await readContacts();
  contacts.pop();
  return await writeContacts(contacts);
};


removeLastContact();
