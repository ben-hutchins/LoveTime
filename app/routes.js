const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

  router.post('/time-answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
      var lovetime = req.session.data['what-time-is-the-love']
    
    
    // Check whether the variable matches a condition
      if (lovetime == "midnight"){
        // Send user to next page
        res.redirect('/ineligable.html')
      }
      else {
        // Send user to ineligible page
        res.redirect('/question2')
      }
    
    
    })

module.exports = router
