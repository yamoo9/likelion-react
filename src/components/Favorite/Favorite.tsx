import { useFetcher } from 'react-router-dom';

interface Props {
  contact: ContactType;
}

export function Favorite({ contact }: Props): JSX.Element {
  const fetcher = useFetcher();

  let { favorite } = contact;

  if (fetcher.formData) {
    favorite = fetcher.formData.get('favorite') === 'true';
  }

  return (
    <fetcher.Form method="post">
      <button
        type="submit"
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </fetcher.Form>
  );
}
