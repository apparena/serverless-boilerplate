'use strict';

module.exports = () =
>
{
  const mysql = require('mysql');

  return mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_NAME,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS
  });
}
;
