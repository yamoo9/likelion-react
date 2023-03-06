import { redirect } from 'react-router-dom';
import { deleteContact } from '@/services/contacts';

export async function action({ params }: any) {
  // throw new Error('oh dang!');
  await deleteContact(params.contactId);
  return redirect('/');
}
