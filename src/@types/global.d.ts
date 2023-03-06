interface FakeCacheType {
  [key: string]: unknown;
}

interface ContactType {
  id: string;
  first: string;
  last: string;
  avatar: string;
  twitter: string;
  notes: string;
  favorite: boolean;
}

type ErrorType = Error & { statusText: string };
