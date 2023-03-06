import {
  Outlet,
  redirect,
  useLoaderData,
  useNavigation,
  useSubmit,
} from 'react-router-dom';
import { Detail, Sidebar } from '@/components';
import { getContacts, createContact } from '@/services/contacts';

type LoadDataType = { contacts: ContactType[]; q: string };

export default function RootLayout() {
  const submit = useSubmit();
  const navigation = useNavigation();
  const { contacts, q } = useLoaderData() as LoadDataType;

  const isSearching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q');

  return (
    <>
      <Sidebar
        isSearching={isSearching}
        contacts={contacts}
        onSubmit={submit}
        q={q}
      />
      <Detail className={navigation.state === 'loading' ? 'loading' : ''}>
        <Outlet />
      </Detail>
    </>
  );
}

export async function loader({ request }: any) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q') as string;
  const contacts = await getContacts(q);
  return { contacts, q };
}

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}
