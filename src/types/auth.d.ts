export interface workerLoginReq extends Request {
  body: {
    phoneNumber: string;
    password: string;
  };
}
