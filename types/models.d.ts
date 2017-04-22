/** TodoMVC model definitions **/

declare interface NewJob {
  id?: ClientIdentificationNumber;
  job?: string;
  location?: boolean;
  paid?: boolean;
  total?: number;
}
declare interface NewClient {
  id: ClientIdentificationNumber;
  name: string;
  location?: string;
}
declare interface ClientStoreState {
  id?: ClientIdentificationNumber;
  location: string;
  name: string;
  phone: number;
}
declare interface ClientItemData {
  id: ClientIdentificationNumber;
  location: string;
}

declare interface JobStoreState {

}


declare type ClientIdentificationNumber = number;
