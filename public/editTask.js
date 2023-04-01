const taskIDDOM = document.querySelector(".task-edit-id");

const params = window.location.search;

const id = new URLSearchParams(params).get("id");

console.log(id);

// 1つのタスクを取得する
const showTask = async () => {
  try {
    const { data: task } = await axios.get(`/api/v1/tasks/${id}`);
    const { _id, completed, name} = task;
    taskIDDOM.textContent = _id;

    console.log(task);

  } catch (err) {
    console.log(err);
  }
};

showTask();