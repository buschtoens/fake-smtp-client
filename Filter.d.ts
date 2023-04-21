export namespace Filter {
  /**
   * @see https://github.com/moment/moment/blob/2.29.4/ts3.1-typings/moment.d.ts#L430
   * @see https://github.com/moment/moment/blob/2.29.4/ts3.1-typings/moment.d.ts#L598-L599
   * @see https://github.com/ReachFive/fake-smtp-server/blob/v0.7.5/index.js#L99-L107
   */
  export type Date = string;

  /**
   * @see https://github.com/ReachFive/fake-smtp-server/blob/v0.7.5/index.js#L109-L115
   */
  export type EmailAddress = `${string}@${string}`;
}

export interface Filter {
  since?: Filter.Date;
  until?: Filter.Date;
  to?: Filter.EmailAddress;
  from?: Filter.EmailAddress;
}
