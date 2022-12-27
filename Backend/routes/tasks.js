const { Router } = require("express");
const { check } = require("express-validator");
const {
  getAllTasks,
  createTask,
  getOneTask,
  createSubTask,
  deleteTasks,
  completeTask,
} = require("../controllers/tasks");

const { existTask } = require("../helpers");
const { validationField } = require("../middlewares/validation-field");
const { isValidTypeID } = require("../middlewares/dbValidatios");

const router = Router();

router.get("/tasks", getAllTasks);

router.post(
  "/tasks",
  [check("title", "The title is required").not().isEmpty(), validationField],
  createTask
);

router.get(
  "/:type/:id",
  [
    check("id", "ID is required").not().isEmpty(),
    check("id", "Is not a valid ID of Mongo").isMongoId(),
    isValidTypeID,
    validationField,
  ],
  getOneTask
);

router.post(
  "/subtasks/:id",
  [
    check("id", "ID is required").not().isEmpty(),
    check("id", "Is not a valid ID of Mongo").isMongoId(),
    check("id").custom(existTask),
    validationField,
  ],
  createSubTask
);

router.delete(
  "/:type/:id",
  [
    check("id", "ID is required").not().isEmpty(),
    check("id", "Is not a valid ID of Mongo").isMongoId(),
    isValidTypeID,
    validationField,
  ],
  deleteTasks
);

router.put(
  "/:type/:id",
  [
    check("id", "ID is required").not().isEmpty(),
    check("id", "Is not a valid ID of Mongo").isMongoId(),
    isValidTypeID,
    validationField,
  ],
  completeTask
);

router.get("/test", (req, res) => {
  res.json({
    msg: "Holis test",
  });
});

module.exports = router;
