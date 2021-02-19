module.exports = {
    getAllDuckCalls: (req,res) => {
      const db = req.app.get('db')

      db.get_all_duck_calls().then((products) =>{
      res.status(200).send(products)
        })
    }
}