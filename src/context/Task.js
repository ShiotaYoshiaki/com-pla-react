import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import * as ApiCalls from "api/ApiCalls";
import ErrorMessage from "config/ErrorMessage";
import Card from "layouts/applications/kanban/components/Card";

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
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function TaskProvider({ children }) {
  const initState = {
    tasks: [],
    selected: {
      project: {
        id: "",
        title: "",
      },
      tasks: {
        columns: [],
      },
    },
    project: "",
  };
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

export { TaskProvider, useTaskController, fetchTask, addTask };
