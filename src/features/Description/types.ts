export type TDescription = {
  title: string;
  imageUrl: string;
  summary: string;
};

export type TDescriptionState = {
  description: TDescription;
  status: Status;
};

export type SearchItemsParams = {
  id: string;
};

export enum Status {
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}
