# fake-smtp-client

A TypeScript client for [`fake-smtp-server`][fake-smtp-server].

[fake-smtp-server]: https://github.com/gessnerfl/fake-smtp-server

## API

### `getMails(options, filter?)`

```ts
import {
  deleteMails,
  type FakeSMTPOptions,
  type Filter,
} from 'fake-smtp-client';

const options = {
  url: 'https://example.org/api/emails',
  username: 'hedwig', //optional
  password: 'alohomora', // optional
} satisfies FakeSMTPOptions;

const allMails = await getMails(options);

const filter = {
  since: '1980-07-31T00:00:00Z';
  until: '1998-05-2T00:00:00Z';
  to: 'h.potter@hogwarts.edu';
  from: 'g.weasley@hogwarts.edu';
} satisfies Filter;

const magicMails = await getMails(options, filter);
```

### `deleteMails(options)`

Deletes all mails.

```ts
import { deleteMails, type FakeSMTPOptions } from 'fake-smtp-client';

const options = {
  url: 'https://example.org/api/emails',
  username: 'hedwig', //optional
  password: 'alohomora', // optional
} satisfies FakeSMTPOptions;

await deleteMails(options);
```
