import type { Filter } from './Filter';
import type { Mail } from './Mail';

export namespace FakeSMTPOptions {
  export interface Target {
    url: `${string}/api/emails` | URL | (string & {});
  }

  export interface Credentials {
    username: string;
    password: string;
  }
}

export type FakeSMTPOptions =
  | FakeSMTPOptions.Target
  | (FakeSMTPOptions.Target & FakeSMTPOptions.Credentials);

export const getBasicAuthHeader = (username: string, password: string) =>
  `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`;

export const getHeaders = (
  credentials: {} | FakeSMTPOptions.Credentials,
): HeadersInit => {
  const headers: HeadersInit = {
    accept: 'application/json',
  };

  if (
    'username' in credentials &&
    credentials.username &&
    credentials.password
  ) {
    headers['authorization'] = getBasicAuthHeader(
      credentials.username,
      credentials.password,
    );
  }

  return headers;
};

export const getURL = (url: string | URL, filter?: Filter): URL => {
  const newURL = new URL(url);

  if (filter) {
    for (const [key, value] of Object.entries(filter)) {
      newURL.searchParams.set(key, value);
    }
  }

  return newURL;
};

export async function getMails(
  options: FakeSMTPOptions,
  filter?: Filter,
): Promise<Mail[]> {
  const headers = getHeaders(options);
  const url = getURL(options.url, filter);
  const response = await fetch(url, { headers });
  const json = await response.json();
  return json as Mail[];
}

export async function deleteMails(options: FakeSMTPOptions): Promise<void> {
  const headers = getHeaders(options);
  await fetch(options.url, { headers });
}
