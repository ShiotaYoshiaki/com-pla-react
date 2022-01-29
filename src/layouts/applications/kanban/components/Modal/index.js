import MDBox from "components/MDBox";
import { useTaskController, handleTaskModalClose, addTaskDetail } from "context/Task";
import UIModal from "components/UIModal";
import { Formik, Form } from "formik";
import form from "layouts/applications/kanban/schemas/form";
import initialValues from "layouts/applications/kanban/schemas/initialValues";
import validations from "layouts/applications/kanban/schemas/validations";
import { useInitialController } from "context/Initial";
import ModalForm from "../ModalForm";

function Modal() {
  const [taskController, taskDispatch] = useTaskController();
  const { selected } = taskController;
  const { id: projectId } = selected.project;
  const { taskId, categoryId } = selected.card;

  const [initialController] = useInitialController();
  const { company, person } = initialController;

  const { formId, formField } = form;
  const currentValidation = validations;

  const handleClose = () => {
    handleTaskModalClose(taskDispatch);
  };

  const handleSubmit = (values, actions) => {
    console.log("values");
    console.log(values);
    console.log("actions");
    console.log(actions);
    addTaskDetail(values, taskId, categoryId, projectId, company.id, person.id);
  };

  return (
    <UIModal isOpen={taskId} handleClose={handleClose} keyParam="kanban-task">
      <MDBox p={3}>
        <Formik
          initialValues={initialValues}
          validationSchema={currentValidation}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, isSubmitting, setFieldValue }) => (
            <Form id={formId} autoComplete="off">
              <ModalForm
                formData={{
                  values,
                  errors,
                  touched,
                  formId,
                  formField,
                  isSubmitting,
                  setFieldValue,
                }}
              />
            </Form>
          )}
        </Formik>
      </MDBox>
    </UIModal>
  );
}

export default Modal;
