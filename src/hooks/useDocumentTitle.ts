import { useEffect } from 'react';

const DOCUMENT_TITLE = 'Contacts App';

export function useDocumentTitle(contact?: ContactType) {
  useEffect(() => {
    if (contact) {
      document.title = `${contact.first} ${contact.last} ← ${DOCUMENT_TITLE}`;
    } else {
      document.title = DOCUMENT_TITLE;
    }
  }, [contact]);
}
