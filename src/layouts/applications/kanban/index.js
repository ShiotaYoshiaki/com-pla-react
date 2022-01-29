/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";

// @asseinfo/react-kanban components
import Board from "@asseinfo/react-kanban";

// react-html-parser components
import ReactHtmlParser from "react-html-parser";

// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

// Material Dashboard 2 PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Kanban application components
import Header from "layouts/applications/kanban/components/Header";
import Modal from "layouts/applications/kanban/components/Modal";

// Material Dashboard 2 PRO React context
import { useMaterialUIController } from "context";
import { useTaskController, fetchTask, addTask, handleTask, clickTaskCard } from "context/Task";

function Kanban() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [newCardForm, setNewCardForm] = useState(false);
  const [formValue, setFormValue] = useState("");

  const [taskController, taskDispatch] = useTaskController();
  const { selected } = taskController;

  const openNewCardForm = (event, id) => setNewCardForm(id);
  const closeNewCardForm = () => setNewCardForm(false);
  const handeSetFormValue = ({ currentTarget }) => setFormValue(currentTarget.value);

  const MOCK_PROJECT_ID = 1;
  const MOCK_COMPANY_ID = 3;
  const MOCK_CREATED_BY = 1;
  const handleAddTask = async (categoryId) => {
    const content = formValue;
    const data = {
      category_id: categoryId,
      company_id: MOCK_COMPANY_ID,
      project_id: MOCK_PROJECT_ID,
      content,
      created_by: MOCK_CREATED_BY,
    };
    await addTask(data);
  };
  const handleDrag = async (e) => {
    await handleTask(e, MOCK_PROJECT_ID);
  };
  const handleTaskCard = async (template) => {
    await clickTaskCard(taskDispatch, template, selected.tasks);
  };
  useEffect(() => {
    fetchTask(taskDispatch, MOCK_PROJECT_ID);
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox display="flex" justifyContent="flex-end" m={2}>
          <Header />
        </MDBox>
        <MDBox
          position="relative"
          my={4}
          sx={({
            palette: { light, background },
            functions: { pxToRem },
            borders: { borderRadius },
          }) => ({
            "& .react-kanban-column": {
              backgroundColor: darkMode ? background.card : light.main,
              width: pxToRem(450),
              margin: `0 ${pxToRem(10)}`,
              padding: pxToRem(20),
              borderRadius: borderRadius.lg,
            },
          })}
        >
          {selected.tasks.columns.length ? (
            // https://github.com/asseinfo/react-kanban
            <Board
              initialBoard={selected.tasks}
              allowAddCard
              allowAddColumn
              renderColumnHeader={({ id, title }, { addCard }) => (
                <>
                  <MDBox display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                    <MDTypography variant="h6">{title}</MDTypography>
                    <MDButton size="small" iconOnly onClick={(event) => openNewCardForm(event, id)}>
                      <Icon
                        sx={{
                          fontWeight: "bold",
                          color: ({ palette: { dark } }) => dark.main,
                        }}
                      >
                        add
                      </Icon>
                    </MDButton>
                  </MDBox>
                  {newCardForm === id ? (
                    <MDBox my={2.5}>
                      <MDInput
                        value={formValue}
                        rows="4"
                        onChange={handeSetFormValue}
                        multiline
                        fullWidth
                      />
                      <MDBox display="flex" mt={2}>
                        <MDButton
                          variant="gradient"
                          color="success"
                          size="small"
                          onClick={() => {
                            addCard({ id: uuidv4(), template: formValue });
                            handleAddTask(id);
                            setFormValue("");
                          }}
                        >
                          add
                        </MDButton>
                        <MDBox ml={1}>
                          <MDButton
                            variant="gradient"
                            color="light"
                            size="small"
                            onClick={closeNewCardForm}
                          >
                            cancel
                          </MDButton>
                        </MDBox>
                      </MDBox>
                    </MDBox>
                  ) : null}
                </>
              )}
              renderCard={({ id, template }, { dragging }) => (
                <MDBox
                  key={id}
                  dragging={dragging.toString() || undefined}
                  display="block"
                  width="calc(450px - 40px)"
                  bgColor={darkMode ? "transparent" : "white"}
                  color="text"
                  borderRadius="xl"
                  mt={2.5}
                  py={1.875}
                  px={1.875}
                  lineHeight={1.5}
                  sx={{
                    border: ({ borders: { borderWidth }, palette: { white } }) =>
                      darkMode ? `${borderWidth[1]} solid ${white.main}` : 0,
                    fontSize: ({ typography: { size } }) => size.md,
                  }}
                >
                  <p onClick={() => handleTaskCard(template)}>
                    {typeof template === "string" ? ReactHtmlParser(template) : template}
                  </p>
                </MDBox>
              )}
              onCardNew={() => null}
              onCardDragEnd={handleDrag}
            />
          ) : null}
        </MDBox>
      </MDBox>
      <Modal />
      <Footer />
    </DashboardLayout>
  );
}

export default Kanban;
