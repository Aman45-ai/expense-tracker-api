import { Router } from "express"
import controllers from "../controllers/expense.controller.js"
import authMiddleware from "../middleware/auth.middleware.js"
const router = Router()

router.post('/expense', authMiddleware, controllers.expenseCreate)
router.get('/get-expense', authMiddleware, controllers.getExpense)
router.put('/expense/:id', authMiddleware, controllers.putExpense)
router.patch('/expense/:id', authMiddleware, controllers.patchExpense)
router.delete('/expense/:id', authMiddleware, controllers.deleteExpense)

export default router