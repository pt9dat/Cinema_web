
module.exports = {
    userName: 'dat',
    password: 'dat123456',
    secret: 'nanana',
    getDbConnectionString: function () {
        return `mongodb://${this.userName}:${this.password}@ds231643.mlab.com:31643/cinema_web`
        }
}