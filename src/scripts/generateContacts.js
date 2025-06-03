import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  let contacts = await readContacts();
  let i = 1;
  while (i <= number) {
    contacts.push(createFakeContact());
    i++;
  }

  try {
    await writeContacts(contacts);
  } catch (e) {
    console.log('generate Contacts error: ', e);
  }
};

generateContacts(5);
