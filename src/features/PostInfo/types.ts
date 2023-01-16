export type TPostInfo = {
  id: string;
  title: string;
  imageUrl: string;
  summary: string;
  publishedAt: string;
};

export enum Status {
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}

export type TPostInfoState = {
  posts: TPostInfo[];
  status: Status;
};

export type SearchItemsParams = {
  query: string;
};
