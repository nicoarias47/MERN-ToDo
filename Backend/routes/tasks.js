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

const {
  existIdInDb,
  existTask,
  existSubTask,
} = require("../helpers/dbValidations");
const { validationField } = require("../middlewares/validation-field");
const { isValidTypeID } = require("../middlewares/dbValidatios");

const router = Router();

router.get("/", getAllTasks);

router.post(
  "/",
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
  "/:id/subtask",
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

module.exports = router;
