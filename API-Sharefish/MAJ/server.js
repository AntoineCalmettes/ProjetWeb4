// //*************************************************************************************************************** */
// // ---------------------------------Imports ----------------------------------------------------------------------
// //*************************************************************************************************************** */
// const url = require("url");
// const express = require('express');
// const bodyParser = require('body-parser')
// const database = require('./database')
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// //*************************************************************************************************************** */
// //------------ JSON WEB TOKEN -------------------------------------------------------------------------------------
// //*************************************************************************************************************** */

// const token = jwt.sign({
//     foo: 'bar'
// }, 'shhhhh');

// //*************************************************************************************************************** */
// //-----------------------------Bcrypt-------------------------------------------------------------------------------
// //*************************************************************************************************************** */

// const saltRounds = 5;

// //*************************************************************************************************************** */
// // ---------------------------------Instancite server ---------------------------------------------------------------
// //*************************************************************************************************************** */
// const port = 8114;
// const app = express();

// //*************************************************************************************************************** */
// //---------------------------------- Autorisation API-------------------------------------------------------------
// //*************************************************************************************************************** */

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     next();
// });

// //*************************************************************************************************************** */
// // ------------------------------- Configuration route-------------------------------------------------------
// //*************************************************************************************************************** */

// //*************************************************************************************************************** */
// // Acceuil***************
// //*************************************************************************************************************** */
// app.get('/', function (req, res) {

//     const allUsers = "SELECT * FROM user ;";
//     const allPost ="SELECT * FROM post ;"
//     database.do_query(allUsers, (result) => {
//             res.send(result);

//         }, () => {
//             res.sendStatus(500);
//         }

//     )


// });
// //*************************************************************************************************************** */
// // Inscription*****************
// //*************************************************************************************************************** */
// app.get('/inscription', function (req, res) {
//     res.send('Page inscription')
// });

// app.post('/inscription/:username/:email/:password', function (req, res) {
//     const user = req.params;

//     // let salt = bcrypt.genSaltSync();
//     // let hash = bcrypt.hashSync(user.password, salt);

//     let newDate = new Date().toISOString().slice(0, 19).replace('T', ' ');

//     let addUser = " INSERT INTO user(username,email,password,create_user_date) VALUES (" + "'" + user.username + "'" + "," + "'" + user.email + "'" + "," + "'" + user.password + "'" + "," + "'" + newDate + "'" + ");";
//     database.do_query(addUser, () => {
//         res.send(req.params);
//     }, (err) => {
//         if (err.errno === 1062) {
//             res.send("Adresse email est déjà utilisé")
//         } else {
//             res.sendStatus(500);
//         }

//     });
// });
// //*************************************************************************************************************** */
// //Connexion *************************
// //*************************************************************************************************************** */
// app.get('/connexion/:email/:mdp', function (req, res) {
//     const userLogin = req.params;
//     const verifyUser = "SELECT email FROM user WHERE email=" + "'" + userLogin.email + "' AND password=" + "'" + userLogin.mdp + "';";

//     database.do_query(verifyUser, (result) => {
//         console.log(result.length)
//         if (result.length > 0) {
//             res.send(result);
//         } else {
//             res.send("Votre mot de passe est invalide")
//         }

//     }, (err) => {
//         console.log(err)
//         res.sendStatus(500);
//     });
// });

// //*************************************************************************************************************** */
// //USER UPDATE *************************
// //*************************************************************************************************************** */

// //Username
// app.put('/user/update/username/:username/:idUser', function (req, res) {

//     const paramChangeUsername = req.params
//     const requeteChangeUsername = "UPDATE user SET username='" + paramChangeUsername.username + "' WHERE id='" + paramChangeUsername.idUser + "' ;";

//     database.do_query(requeteChangeUsername, (result) => {
//             res.send(result);

//         }, () => {
//             res.sendStatus(500);
//         }

//     )

// });

// //Password

// app.put('/user/update/password/:password/:idUser', function (req, res) {

//     const paramChangePassword = req.params
//     const requeteChangePassword = "UPDATE user SET password='" + paramChangePassword.password + "' WHERE id='" + paramChangePassword.idUser + "' ;";

//     database.do_query(requeteChangePassword, (result) => {
//             res.send(result);

//         }, () => {
//             res.sendStatus(500);
//         }

//     )

// });

// //*************************************************************************************************************** */
// // Posts******************************************
// //*************************************************************************************************************** */

// app.get('/post', function (req, res) {
//     const allPost = "SELECT * FROM post"

//     database.do_query(allPost, (result) => {
//             res.send(result);

//         }, () => {
//             res.sendStatus(500);
//         }

//     )
// });

// app.get('/post/:id', function (req, res) {
//     const userId = req.params;
//     const seachUserId = "SELECT * FROM post WHERE id_user_id=" + "'" + userId.id + "';";

//     database.do_query(seachUserId, (result) => {
//             res.send(result);

//         }, () => {
//             res.sendStatus(500);
//         }

//     )
// });



// app.post('/post/create/:picturePost/:location/:idUserId', function (req, res) {
//     const createPost = req.params;
//     let newDate = new Date().toISOString().slice(0, 19).replace('T', ' ');

//     let addNewPost = " INSERT INTO post(id_user_id,picture_post,location,create_post_date) VALUES (" + "'" + createPost.idUserId + "'" + "," + "'" + createPost.picturePost + "'" + "," + "'" + createPost.location + "'" + "," + "'" + newDate + "'" + ");";


//     database.do_query(addNewPost, () => {
//         res.send(req.params);
//     }, (err) => {

//     });
// })


// //*************************************************************************************************************** */
// //POST UPDATE *************************
// //*************************************************************************************************************** */


// //*************************************************************************************************************** */
// // --------------------------------------------Lauch server------------------------------------------
// //*************************************************************************************************************** */
// // app.listen(port, () => {
// //     console.log("Server en écoute sur le port : " + port)
// // })