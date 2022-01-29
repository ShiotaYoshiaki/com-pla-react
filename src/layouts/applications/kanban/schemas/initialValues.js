import checkout from "layouts/applications/kanban/schemas/form";

const {
  formField: { content, label, detail, progress, urls },
} = checkout;

export default {
  [content.name]: "",
  [label.name]: "",
  [detail.name]: "",
  [progress.name]: "",
  [urls.name]: ["https://"],
};
