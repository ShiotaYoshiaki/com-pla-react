// import axios from 'axios';

import { getCompanyBasic, fetchCompanyDetail } from "mocks/company";

export const company = {
  getBasic: () => {
    const res = getCompanyBasic();
    return res;
  },
  fetchDetail: () => {
    const res = fetchCompanyDetail();
    return res;
  },
};

export const employee = {
  fetch: () => {},
};
