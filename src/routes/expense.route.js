import { Router } from "express"
import controllers from "../controllers/expense.controller.js"
const router = Router();

router.post('/expense',controllers.expenseCreate)
router.get('/get-expense',controllers.getExpense)
router.put('/expense/:id',controllers.putExpense)
router.patch('/expense/:id',controllers.patchExpense)
router.delete('/expense/:id',controllers.deleteExpense)

export default router