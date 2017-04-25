declare type ClientIdentificationNumber = number;
declare namespace IClient {
  interface Info {
    clientId?: ClientIdentificationNumber;
    location?: string;
    firstName: string;
    lastName: string;
    phone?: number;
    email?: string;
    jobs: IJob.Jobs[]
  }
  interface ClientData {
    id: ClientIdentificationNumber;
    location: string;
  }

}
declare namespace IJob {
  interface NewJob {
    id?: ClientIdentificationNumber;
    job?: string;
    location?: boolean;
    paid?: boolean;
    total?: number;
  }
  interface Jobs {
    paid: boolean;
    total: number;
    location: string;
    type: string;

  }

}
