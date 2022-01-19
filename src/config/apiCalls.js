import { call, HTTP_METHOD } from "./requests";
import URLs from "./URLs";

// eslint-disable-next-line import/prefer-default-export
export const fetchProjectTask = async (projectId) => {
  const res = await call(HTTP_METHOD.get, URLs.TASK_PROJECT(projectId));

  const tasks = res.data;
  return tasks;
};
export const putProjectTask = async (data) => {
  await call(HTTP_METHOD.put, URLs.TASK(), data);
  return null;
};
