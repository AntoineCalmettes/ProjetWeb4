/* 
Connexion BDD -----------------------------------------------------------------------------
*/
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "sharefish2"
});


/**
 * Function to run query on database.
 */
/**
 * Function to run query on database.
 */
function do_query(query_str, callback, fallback) {
    connection.connect(function(err) {
        connection.query(query_str, function(err, result) {
            console.log("query to be executed", query_str);
            if (err) {
                if (fallback) {
                    fallback(err);
                    console.log(err)
                    
                }
            } else {
                if (callback) {
                    callback(result);
                }
            }
        });
    });

}

//--------------------------------------------------------------------------------------------------
// EXPORTS

module.exports.do_query = do_query;