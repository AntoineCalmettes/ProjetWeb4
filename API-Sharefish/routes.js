//****************************************************************************************************
//IMPORTS
//****************************************************************************************************
const express = require('express');
const models = require("./models");
const database = require('./database')

// les routes seront créées avec un routers
const router = express.Router();

//****************************************************************************************************

//Home PAGE

//****************************************************************************************************
router.get("/", (req, res) => {
    let result = models.getAll('user');
    database.do_query(result, (result) => {
        res.send(result);
    }, () => {
        res.sendStatus(500);
    })
});

//****************************************************************************************************

// INSCRIPTION D'UN USER

//****************************************************************************************************

router.post('/inscription/:username/:email/:password', function (req, res) {
    let user = req.params;
    let newDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    let result = models.setAddUser(user, newDate);

    database.do_query(result, () => {
        res.send(req.params);
    }, (err) => {
        if (err.errno === 1062) {
            res.send("Adresse email est déjà utilisé")
        } else {
            res.sendStatus(500);
        }

    });

});
//****************************************************************************************************

// CONNEXION D'UN USER

//****************************************************************************************************

router.get('/connexion/:email/:mdp', function (req, res) {
    let user = req.params
    let result = models.getConnexion(user);

    database.do_query(result, (results) => {
        console.log(results.length)
        if (results.length > 0) {
            res.send(results);
        } else {
            res.send("Votre mot de passe est invalide")
        }

    }, (err) => {
        console.log(err)
        res.sendStatus(500);
    });
});

//****************************************************************************************************

// RECUPERATION DES POSTS
//****************************************************************************************************


router.get('/post', function (req, res) {
    let result = models.getAll('post');
    database.do_query(result, (result) => {
        res.send(result);
    }, () => {
        res.sendStatus(500);
    })
});
//****************************************************************************************************

// RECUPERATION DE POSTS PAR ID
//****************************************************************************************************

router.get('/post/:id', function (req, res) {
    const userId = req.params;
    let result = models.getPostId(userId)

    database.do_query(result, (result) => {
            res.send(result);

        }, () => {
            res.sendStatus(500);
        }

    )
});
//****************************************************************************************************

// CREATION DE POST
//****************************************************************************************************


router.post('/post/create/:picturePost/:location/:idUserId', function (req, res) {
    const post = req.params;
    let newDate = new Date().toISOString().slice(0, 19).replace('T', ' ');

    let result = models.setAddPostUser(post, newDate)


    database.do_query(result, () => {
        res.send(req.params);
    }, (err) => {

    });
})

//****************************************************************************************************

// Mise a jour User :  USERNAME && PASSWORD
//****************************************************************************************************

//Username
router.put('/user/update/username/:username/:idUser', function (req, res) {
    const user = req.params;
    let result = models.updateUsername(user)

    database.do_query(result, (result) => {
            res.send(result);

        }, () => {
            res.sendStatus(500);
        }

    )

});

//Password
router.put('/user/update/password/:password/:idUser', function (req, res) {
    const user = req.params;
    let result = models.updatePassword(user)

    database.do_query(result, (result) => {
            res.send(result);

        }, () => {
            res.sendStatus(500);
        }

    )

});

//****************************************************************************************************

// Mise a jour POST :  LOCATION && PICTURE POST
//****************************************************************************************************



//****************************************************************************************************

// EXPORTS
//****************************************************************************************************
module.exports = router;