mocha.setup('bdd');

const { expect, assert } = chai;

const AUTH_KEY = "SOME_AUTH_KEY";
const user = {
    username: 'SOME_USERNAME',
    password: 'SOME_PASSHASH'
};
const cookie = {
    img: 'SOME COOKIE IMG',
    text: 'SOME COOKIE TEXT',
    likes: 0,
    dislikes: 0,
    id: 42
};

describe('Tests', function() {
    describe('Get materials tests', function() {
        const result = {
            result: []
        };

        beforeEach(function() {
            sinon.stub(requester, 'getJSON')
                .returns(new Promise((resolve, reject) => {
                    resolve(result);
                }));
        });
        afterEach(function() {
            requester.getJSON.restore();
        });

        it('expect data.materials.get() to make exactly one getJSON call', function(done) {
            data.materials.get()
                .then(() => {
                    expect(requester.getJSON.calledOnce).to.be.true;
                })
                .then(done, done);
        })
        it('expect data.materials.get() to make correct getJSON call', function(done) {
            data.materials.get()
                .then(obj => {
                    const actual = requester.getJSON
                        .firstCall
                        .args[0];

                    expect(actual).to.equal('/api/materials');
                })
                .then(done, done);
        });
        it('expect data.materials.get() to return correct result', function(done) {
            data.materials.get()
                .then(obj => {
                    expect(obj).to.eql(result)
                })
                .then(done, done);
        });
    });

    describe('Register tests', function() {
        beforeEach(function() {
            sinon.stub(requester, 'postJSON')
                .returns(new Promise((resolve, reject) => {
                    resolve(user);
                }));
        });
        afterEach(function() {
            requester.postJSON.restore();
        });

        it('expect postJSON to be called once', function(done) {
            data.users.register(user)
                .then(() => {
                    expect(requester.postJSON.calledOnce).to.be.true;
                })
                .then(done, done);
        });
        it('expect data.users.register(user) to make correct postJSON call', function(done) {
            data.users.register(user)
                .then(() => {
                    const actual = requester.postJSON
                        .firstCall
                        .args[0];
                    expect(actual).to.equal('/api/users');
                })
                .then(done, done);
        });
        it('expect data.users.register(user) to post correct user data', function(done) {
            data.users.register(user)
                .then(() => {
                    const actual = requester.postJSON
                        .firstCall
                        .args[1];
                    const prop = Object.keys(actual).sort();
                    expect(prop.length).to.equal(2);
                    expect(prop[0]).to.equal('password');
                    expect(prop[1]).to.equal('username');
                })
                .then(done, done);
        });
        it('expect data.users.register(user) to make correct postJSON call', function(done) {
            data.users.register(user)
                .then(() => {
                    const actual = requester.postJSON
                        .firstCall
                        .args[0];
                    expect(actual).to.equal('/api/users');
                })
                .then(done, done);
        });
        it('expect data.users.register(user) to post correct user data', function(done) {
            data.users.register(user)
                .then(() => {
                    const actual = requester.postJSON
                        .firstCall
                        .args[1];
                    const prop = Object.keys(actual).sort();
                    expect(prop.length).to.equal(2);
                    expect(prop[0]).to.equal('password');
                    expect(prop[1]).to.equal('username');
                })
                .then(done, done);
        });

        it('expect registering of user to return the user', function(done) {
            data.users.register(user)
                .then(actual => {
                    expect(actual).to.eql(user);
                })
                .then(done, done);
        });
    });

    describe('Login tests', function() {
        beforeEach(function() {
            sinon.stub(requester, 'putJSON')
                .returns(new Promise((resolve, reject) => {
                    resolve({
                        result: {
                            username: user.username,
                            authKey: AUTH_KEY
                        }
                    });
                }));
            localStorage.clear();
        });
        afterEach(function() {
            requester.putJSON.restore();
            localStorage.clear();
        });

        it('expect putJSON to be called once', function(done) {
            data.users.login(user)
                .then(() => {
                    expect(requester.putJSON.calledOnce).to.be.true;
                })
                .then(done, done);
        });
        it('expect data.users.login(user) to make correct putJSON call', function(done) {
            data.users.login(user)
                .then(() => {
                    const actual = requester.putJSON
                        .firstCall
                        .args[0];
                    expect(actual).to.equal('/api/users/auth');
                })
                .then(done, done);
        });
        it('expect data.users.login(user) to put correct user data', function(done) {
            data.users.login(user)
                .then(() => {
                    const actual = requester.putJSON
                        .firstCall
                        .args[1];
                    const prop = Object.keys(actual).sort();
                    expect(prop.length).to.equal(2);
                    expect(prop[0]).to.equal('password');
                    expect(prop[1]).to.equal('username');
                })
                .then(done, done);
        });
        it('Expect login to login the right user and set him in localStorage', function(done) {
            data.users.login(user)
                .then(() => {
                    expect(localStorage.getItem('SPECIAL-AUTH-USERNAME')).to.equal(user.username);
                })
                .then(done, done);
        });
        it('Expect login to set auth key in localStorage', function(done) {
            data.users.login(user)
                .then(() => {
                    expect(localStorage.getItem('SPECIAL-AUTH-KEY')).to.equal(AUTH_KEY);
                })
                .then(done, done);
        });
    });

    describe('Is loggedIn tests', function() {
        beforeEach(function() {
            sinon.stub(requester, 'putJSON')
                .returns(new Promise((resolve, reject) => {
                    resolve({
                        result: {
                            username: user.username,
                            authKey: AUTH_KEY
                        }
                    });
                }));
            localStorage.clear();
        });
        afterEach(function() {
            requester.putJSON.restore();
            localStorage.clear();
        });

        it('expect not to be logged in when have not logged in', function(done) {
            data.users.current()
                .then(f => {
                    expect(f).to.be.false;
                })
                .then(done, done);
        });
        it('expect to be logged in when we have logged in', function(done) {
            data.users.login(user)
                .then(() => {
                    return data.users.current();
                })
                .then(f => {
                    expect(f).to.be.true;
                })
                .then(done, done);
        });
    });

    describe('Logout tests', function() {
        beforeEach(function() {
            sinon.stub(requester, 'putJSON')
                .returns(new Promise((resolve, reject) => {
                    resolve({
                        result: {
                            username: user.username,
                            authKey: AUTH_KEY
                        }
                    });
                }));
            localStorage.clear();
        });
        afterEach(function() {
            requester.putJSON.restore();
            localStorage.clear();
        });

        it('expect localStorage to have no username after logout', function(done) {
            data.users.login(user)
                .then(() => {
                    return data.users.logout();
                })
                .then(() => {
                    expect(localStorage.getItem('SPECIAL-AUTH-USERNAME')).to.be.null;
                })
                .then(done, done);
        });

        it('expect localStorage to have no authKey after logout', function(done) {
            data.users.login(user)
                .then(() => {
                    return data.users.logout();
                })
                .then(() => {
                    expect(localStorage.getItem('SPECIAL-AUTH-KEY')).to.be.null;
                })
                .then(done, done);
        });
    });

  
});

mocha.run();