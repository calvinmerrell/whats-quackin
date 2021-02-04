module.exports = {
    getAllProducts: (req,res) => {
      const db = req.app.get('db')

      db.get_all_products().then((products) =>{
      res.status(200).send(products)
        })
    },
    editProduct: (req,res) => {
      console.log(req.params)
      console.log(req.body)
      const db = req.app.get('db')
      const { product_id } = req.params
      const { price } = req.body


      db.edit_product([+product_id, +price]).then((products) => {
        res.status(200).send(products)
      })
      .catch(err => {
        res.status(400).send(err)
      })
    },

    deleteProduct: (req, res) => {
      const db = req.app.get('db')
      const { product_id } = req.params
  
      db.delete_product([+product_id]).then(() => {
        res.sendStatus(200)
      })
        .catch(err => {
          res.status(400).send(err)
        })
    }
  }
   
