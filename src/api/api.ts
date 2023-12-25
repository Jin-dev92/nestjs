import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

export class Api {
  private api: AxiosInstance;

  constructor(config: CreateAxiosDefaults) {
    this.api = axios.create(config);
  }
}
