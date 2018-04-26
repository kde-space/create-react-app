import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import TodoApp from '../components/TodoApp';
import { inputTask, addTask, clearInput, clearAll } from '../actions/tasks';

function mapStateToProps({ task, tasks }) {
  return {
    task: tasks.task,
    tasks: tasks.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTask(task) {
      dispatch(addTask(task));
    },
    inputTask(task) {
      dispatch(inputTask(task));
    },
    clearInput() {
      dispatch(clearInput());
    },
    clearAll() {
      dispatch(clearAll());
    },
    redirectToError() {
      dispatch(push('/error'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
