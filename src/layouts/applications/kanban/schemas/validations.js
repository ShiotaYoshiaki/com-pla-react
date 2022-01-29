import * as Yup from "yup";
import checkout from "layouts/applications/kanban/schemas/form";

const {
  formField: { content, label, progress },
} = checkout;

export default Yup.object().shape({
  [content.name]: Yup.string().required(content.errorMsg),
  [label.name]: Yup.string().required(content.errorMsg),
  [progress.name]: Yup.number().required(progress.errorMsg),
});
