declare type ClientIdentificationNumber = number;
declare namespace IClient {
    interface Info {
    id?: ClientIdentificationNumber;
    location?: string;
    name?: string;
    phone?: number;
  }
   interface ClientData {
    id: ClientIdentificationNumber;
    location: string;
  }

}
 declare namespace  IJob {
  interface NewJob {
    id?: ClientIdentificationNumber;
    job?: string;
    location?: boolean;
    paid?: boolean;
    total?: number;
  }
  interface JobStoreState {

  }

}
