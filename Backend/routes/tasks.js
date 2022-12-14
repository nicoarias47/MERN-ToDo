const { Router } = require("express");
const { getTasks } = require("../controllers/tasks");

const router = Router();

router.get("/", getTasks);

router.post("/", (req, res) => {
  res.json({ msg: "Hello world - CREATE TASK" });
});

router.post("/:id/sub-task", (req, res) => {
  res.json({ msg: "Hello world - CREATE SUB TASK" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "Hello world - DELETE TASK" });
});

router.put("/:category/:id", (req, res) => {
  res.json({ msg: "Hello world - COMPLETE/UNCOMPLETE  TASK/SUBTASK" });
});

module.exports = router;
