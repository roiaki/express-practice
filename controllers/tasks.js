const getAllTasks = (req, res) => {
  res.send("タスクを全て取得");
}

const createTask = (req, res) => {
  res.send("タスクを新規作成");
}

const getSingleTask = (req, res) => {
  res.send("１つのタスクを取得しました。");
}

const updateTask = (req, res) => {
  res.send("１つのタスクを更新しました。");
}

const deleteTask = (req, res) => {
  res.send("１つのタスクを削除しました。");
}

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask
};