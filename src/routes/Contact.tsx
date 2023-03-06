import { Favorite } from '@/components';
import { Form, useLoaderData } from 'react-router-dom';
import { getContact, updateContact } from '@/services/contacts';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Contact() {
  const contact = useLoaderData() as ContactType;

  useDocumentTitle(contact);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    if (!confirm('Please confirm you want to delete this record.')) {
      e.preventDefault();
    }
  };

  return (
    <div id="contact">
      <div>
        <img src={contact.avatar} alt="" />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{' '}
          <Favorite contact={contact as ContactType} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              href={`https://twitter.com/${contact.twitter}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form method="post" action="destory" onSubmit={handleSubmit}>
            <button type="submit" style={{ color: '#c82727' }}>
              Delete
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

type LoaderParams = {
  params: any;
};

export async function loader({ params }: LoaderParams) {
  const contact = await getContact(params.contactId);
  if (!contact) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return contact;
}

export async function action({ request, params }: any) {
  let formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get('favorite') === 'true',
  });
}
