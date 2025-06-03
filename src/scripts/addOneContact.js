import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  let contacts = await readContacts();
  contacts.push(createFakeContact());

  try {
    await writeContacts(contacts);
  } catch (e) {
    console.log('add one Contact error: ', e);
  }
};

addOneContact();
