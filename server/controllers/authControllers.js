const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
      // need db to add user eventually
      const db = req.app.get('db');
      
      // need user info from the registering user
      const {username, password, first_name, last_name, is_admin} = req.body;

      const [existingUser] = await db.auth.get_user([username])

      // if existing user found
      if(existingUser) {
          return res.status(409).send('User already exists')
      }

      // hash the password
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password,salt);

        //insert the newUser into the db
      const [newUser] = await db.auth.register_user([username, hash, first_name, last_name, is_admin])
      delete newUser.hash;
      delete newUser.first_name;
      delete newUser.last_name;

      //create a session for the new user which logs them in
      req.session.user =  newUser

      // send a response with the session object so the front end can use the info as needed
      res.status(200).send(newUser)

    },
    login: async (req, res) => {
      const db = req.app.get('db')
      const {username,password} = req.body

      const [existingUser] = await db.auth.get_user([username])

      if(!existingUser){
        return res.status(404).send('User does not exist')
      }

      // Check the password against the ahsh, if there is a mismatch reject the request. 
      const isAuthenticated = bcrypt.compareSync(password,existingUser.hash)

      if(!isAuthenticated){
        return res.status(403).send('Incorrect password')
      }

      // Delete the Hash from the user object
      delete existingUser.hash

      // Attach the user to the session
      req.session.user = existingUser
      console.log(req.session.user)
      // Send back confirmation of login
      res.status(200).send(existingUser)
    },
    getUserSession: (req,res) => {
      if(req.session.user){
        res.status(200).send(req.session.user)
      } else {
        res.status(404).send('No session found')
      }
    },
    logout: (req, res) => {
      req.session.destroy()
      res.sendStatus(200)  
    }
}