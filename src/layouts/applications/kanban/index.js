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
import Card from "layouts/applications/kanban/components/Card";

// Material Dashboard 2 PRO React context
import { useMaterialUIController } from "context";
import { fetchProjectTask } from "config/apiCalls";

function Kanban() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [newCardForm, setNewCardForm] = useState(false);
  const [formValue, setFormValue] = useState("");
  const [tasks, setTasks] = useState({ columns: [] });

  const openNewCardForm = (event, id) => setNewCardForm(id);
  const closeNewCardForm = () => setNewCardForm(false);
  const handeSetFormValue = ({ currentTarget }) => setFormValue(currentTarget.value);

  const fetchTasks = async () => {
    const projectTasks = await fetchProjectTask(1);
    const cards = projectTasks.map((category) => {
      const { id: categoryId, title: categoryTitle, template } = category;
      const cardTemplate = template.map((card) => {
        const { id: cardId, color, label, content, progress, members } = card;
        const badge = {
          label,
          color,
        };
        return {
          id: cardId,
          template: <Card badge={badge} content={content} progress={progress} members={members} />,
        };
      });
      return {
        id: categoryId,
        title: categoryTitle,
        cards: cardTemplate,
      };
    });
    const format = {
      columns: cards,
    };
    setTasks(format);
  };

  // const putTask = async () => {
  //   const info = {
  //     category_id: 1,
  //     company_id: 3,
  //     project_id: 2,
  //     urls: "['https://~~', 'https://~~',]",
  //     color: "info",
  //     label: "タスク",
  //     content: "フロントのテスト",
  //     created_by: 1,
  //   };
  //   putProjectTask(info);
  // };

  useEffect(() => {
    fetchTasks();
    // putTask();
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
          {tasks.columns.length ? (
            <Board
              initialBoard={tasks}
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
                  {typeof template === "string" ? ReactHtmlParser(template) : template}
                </MDBox>
              )}
              onCardNew={() => null}
            />
          ) : null}
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Kanban;
