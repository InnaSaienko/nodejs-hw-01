import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  let contacts = await readContacts();

  return contacts.length;
};

console.log(await countContacts());
