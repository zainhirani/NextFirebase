export namespace Todo {
  export type Items = {
    _id: string;
    title: string;
    description: string;
  };

  // Fetch
  export type FetchProps = {};
  export type FetchResponse = {
    data: Items[];
  };
  export interface FetchAPIPayload extends FetchProps {}

  // Detail
  export type DetailProps = {
    id: string | undefined;
  };
  export type DetailResponse = {
    data: Items;
  };
  export interface DetailAPIPayload extends DetailProps {}

  // Create
  export type CreateProps = {};
  export type CreateResponse = {
    data: Items;
  };
  export type CreateMutationPayload = {
    title: string;
    description: string;
  };
  export interface CreateAPIPayload extends CreateProps {
    data: CreateMutationPayload;
  }
}
