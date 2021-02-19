module.exports = {
    getAllBlanks: (req,res) => {
      const db = req.app.get('db')

      db.get_all_blanks().then((products) =>{
      res.status(200).send(products)
        })
    }
}