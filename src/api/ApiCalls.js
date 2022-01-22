import { HTTP_METHOD, call } from "config/requests";
import URLs from "config/URLs";
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

export const task = {
  fetchProject: async (projectId) => {
    const res = await call(HTTP_METHOD.get, URLs.TASK_PROJECT(projectId));
    const tasks = res.data;
    return tasks;
  },
  putProjectTask: async (data) => {
    await call(HTTP_METHOD.put, URLs.TASK(), data);
    return null;
  },
  patchForKanban: async (data) => {
    await call(HTTP_METHOD.patch, URLs.TASK_KANBAN(), data);
    return null;
  },
};
