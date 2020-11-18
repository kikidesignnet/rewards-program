const express = require('express');
const router = express.Router();

// Load Customer model
const Customer = require('../models/Customer');

// @route GET api/customers/test
// @description tests customers route
// @access Public
router.get('/test', (req, res) => res.send('customer route testing!'));


// @route GET api/customers
// @description Get all customers
// @access Public
router.get('/', (req, res) => {
  Customer.find()
    .then((customers) => {
      res.json(customers)
    })
    .catch(err => res.status(404).json({ nocustomersfound: 'No Customers found' }));
});

// @route GET api/customers/:id
// @description Get single customer by id
// @access Public
// router.route('/:id').get((req, res) => {
//   Customer.findById(req.params.id)
//     .then(customer => res.json(customer))
//     .catch(err => res.status(400).json('Error: ' + err));
// });
router.route('/:account').get((req, res) => {
  Customer.find({'account': req.params.account})
    .then(customer => res.json(customer))
    .catch(err => res.status(400).json('Error: ' + err));
});

// @route GET api/customers
// @description add/save customer
// @access Public
router.post('/add', (req, res) => {
  // Customer.create(req.body)
  //   .then(customer => res.json({ msg: 'Customer added successfully' }))
  //   .catch(err => res.status(400).json({ error: 'Unable to add this customer' }));
  const body = req.body;

  const customer = new Customer(body);

  customer.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: customer._id,
                message: 'Customer created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Customer not created!',
            })
        })
});

// @route GET api/customers/:account
// @description Delete book by account
// @access Public
router.delete('/:id', (req, res) => {
  Customer.findByIdAndRemove(req.params.id, req.body)
    .then(customer => res.json({ mgs: 'Customer entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a customer' }));
});

module.exports = router;
