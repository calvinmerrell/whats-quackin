module.exports = {
    getAllGooseCalls: (req,res) => {
      const db = req.app.get('db')

      db.get_all_goose_calls().then((products) =>{
      res.status(200).send(products)
        })
    }
}