var config = {};

config.port = 3000;

//Authentication
config.auth = false;

//Database
config.database = 'videos';
config.username = 'mysql';
config.password = 'mysql';
config.table_prefix = '';

//Pagination
config.paginate = true;
config.page_limit = 10;

module.exports = config;
