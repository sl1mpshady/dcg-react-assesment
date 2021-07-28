import { ChangeEvent } from "react";

export type OnChangeEvent = (
  index: number,
  event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
) => any;

export type OnOperatorChange = (
  event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
) => any;
