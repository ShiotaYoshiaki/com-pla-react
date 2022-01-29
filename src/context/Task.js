import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import * as ApiCalls from "api/ApiCalls";
import ErrorMessage from "config/ErrorMessage";
import Card from "layouts/applications/kanban/components/Card";
import form from "layouts/applications/kanban/schemas/form";

const initState = {
  tasks: [],
  selected: {
    project: {
      id: 1,
      title: "",
    },
    tasks: {
      columns: [],
    },
    card: {
      badge: { label: "", color: "" },
      content: "",
      progress: null,
      members: [],
      categoryId: 0,
      taskId: 0,
      image: "",
      attachedFiles: "",
    },
  },
  project: "",
};

const Task = createContext();
Task.displayName = "TaskContext";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_PROJECT_TASK": {
      return {
        ...state,
        selected: {
          ...state.selected,
          tasks: {
            columns: action.value,
          },
        },
      };
    }
    case "ADD_TASK": {
      return {
        ...state,
        ...action.value,
      };
    }
    case "CLICK_TASK_CARD": {
      return {
        ...state,
        selected: {
          ...state.selected,
          card: action.value,
        },
      };
    }
    case "CLOSE_TASK_CARD_MODAL": {
      return {
        ...state,
        selected: {
          ...state.selected,
          card: initState.selected.card,
        },
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function TaskProvider({ children }) {
  const [taskController, taskDispatch] = useReducer(reducer, initState);
  return <Task.Provider value={[taskController, taskDispatch]}>{children}</Task.Provider>;
}

function useTaskController() {
  const context = useContext(Task);
  if (!context) {
    throw new Error(ErrorMessage.CONTEXT_INITIAL_ERROR);
  }
  return context;
}

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const fetchTaskCase = async (projectId) => {
  if (projectId) {
    const selfTask = await ApiCalls.task.fetchProject(projectId);
    return selfTask;
  }
  return null;
};

const fetchTask = async (dispatch, projectId) => {
  const projectTasks = await fetchTaskCase(projectId);
  const value = projectTasks.map((category) => {
    const { id: categoryId, title: categoryTitle, template } = category;
    const cardTemplate = template.map((card) => {
      const { id: cardId, color, label, content, progress, members } = card;
      const badge = {
        label,
        color,
      };
      return {
        id: cardId,
        template: (
          <Card
            key={`card_${cardId}`}
            badge={badge}
            content={content}
            progress={progress}
            members={members}
            categoryId={categoryId}
            taskId={cardId}
          />
        ),
      };
    });
    return {
      id: categoryId,
      title: categoryTitle,
      cards: cardTemplate,
    };
  });

  return dispatch({ type: "FETCH_PROJECT_TASK", value });
};

const addTask = async (data) => {
  await ApiCalls.task.putProjectTask(data);
};
const addTaskDetail = async (values, taskId, categoryId, projectId, companyId, personId) => {
  const { content, detail, label, progress, urls } = values;
  const labelOptions = form.formField.label.options;
  const selectedLabel = labelOptions.find((labelData) => labelData.value === label);
  const { name, color } = selectedLabel;
  const data = {
    id: taskId,
    company_id: companyId,
    category_id: categoryId,
    project_id: projectId,
    content,
    detail,
    label: name,
    color,
    progress,
    urls,
    created_by: personId,
  };
  console.log("data");
  console.log(data);
  await ApiCalls.task.putProjectTask(data);
};

const handleTask = async (event) => {
  const { columns } = event;
  const kanbanData = [];
  columns.forEach((column) => {
    const { id: categoryId, cards } = column;
    cards.forEach((task, i) => {
      const eachTaskOrder = {
        id: task.id,
        category_id: categoryId,
        order_num: i,
      };
      kanbanData.push(eachTaskOrder);
    });
  });
  const data = kanbanData;
  await ApiCalls.task.patchForKanban(data);
};

const clickTaskCard = (dispatch, template, tasks) => {
  const { taskId, categoryId } = template.props;
  const categoryTasks = tasks.columns.find((task) => task.id === categoryId);
  const targetTask = categoryTasks.cards.find((card) => card.id === taskId);
  const { template: cardTemp } = targetTask;
  const temp = { ...cardTemp.props };
  const value = temp;
  return dispatch({ type: "CLICK_TASK_CARD", value });
};

const handleTaskModalClose = (dispatch) => dispatch({ type: "CLOSE_TASK_CARD_MODAL" });

export {
  TaskProvider,
  useTaskController,
  fetchTask,
  addTask,
  addTaskDetail,
  handleTask,
  clickTaskCard,
  handleTaskModalClose,
};
