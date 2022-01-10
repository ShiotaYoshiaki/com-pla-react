// import axios from 'axios';

import { getSelfCompanyBasic, fetchSelfCompanyDetail } from "mocks/company";
import { fetchSelfDetailPerson, getSelfPerson } from "mocks/person";

export const company = {
  getSelfBasic: () => {
    const res = getSelfCompanyBasic();
    return res;
  },
  fetchDetail: () => {
    const res = fetchSelfCompanyDetail();
    return res;
  },
};

export const person = {
  getSelfBasic: () => {
    const res = getSelfPerson();
    return res;
  },
  getSelfProfile: () => {
    const res = fetchSelfDetailPerson();
    return res;
  },
};
