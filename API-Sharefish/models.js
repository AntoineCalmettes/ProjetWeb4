
function getAll(user) {
    return "SELECT * FROM " + user + ";";
};


function setAddUser(params, date) {
    return " INSERT INTO user(username,email,password,create_user_date) VALUES (" + "'" + params.username + "'" + "," + "'" + params.email + "'" + "," + "'" + params.password + "'" + "," + "'" + date + "'" + ");"
}


function getConnexion(params) {
    return "SELECT email FROM user WHERE email=" + "'" + params.email + "' AND password=" + "'" + params.mdp + "';";
}


function updateUsername(params) {
    return "UPDATE user SET username='" + params.username + "' WHERE id='" + params.idUser + "' ;";
}


function updatePassword(params) {
    return "UPDATE user SET password='" + params.password + "' WHERE id='" + params.idUser + "' ;";
}


function getPostId(params) {
    return "SELECT * FROM post WHERE id_user_id=" + "'" + params.id + "';";
}


function setAddPostUser(params, newDate) {
    return "INSERT INTO post(id_user_id,picture_post,location,create_post_date) VALUES (" + "'" + params.idUserId + "'" + "," + "'" + params.picturePost + "'" + "," + "'" + params.location + "'" + "," + "'" + newDate + "'" + ");";
}

// 
// EXPORTS
//

module.exports = {
    getAll,
    setAddUser,
    getConnexion,
    updateUsername,
    updatePassword,
    getPostId,
    setAddPostUser
};