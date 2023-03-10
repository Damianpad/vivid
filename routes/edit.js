const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')

// router.get('/edit', editController.getEdit)
// router.get('/remove/:id', editController.deleteItem)
// router.post('/update/:id', editController.updateItem)

router.get('/:id', editController.getEdit)
router.get('/remove/:id', editController.deleteClient)


module.exports = router