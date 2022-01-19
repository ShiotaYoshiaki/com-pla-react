const host = "http://localhost";
const port = 8888;
const version = "1.0";

const apiPath = `${host}:${port}/${version}`;

export default {
  TASK: () => `${apiPath}/task`,
  TASK_PROJECT: (projectId) => `${apiPath}/task/${projectId}`,
};
