mocha.setup('bdd');

const { expect, assert } = chai;

const AUTH_KEY = "SOME_AUTH_KEY";
const user = {
    username: 'SOME_USERNAME',
    passHash: 'SOME_PASSHASH'
};
const cookie = {
    img: 'SOME COOKIE IMG',
    text: 'SOME COOKIE TEXT',
    likes: 0,
    dislikes: 0,
    id: 42
};

describe('Tests', function() {
    describe('Get cookies tests', function() {
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

        it('expect data.cookies.get() to make exactly one getJSON call', function(done) {
            data.cookies.get()
                .then(() => {
                    expect(requester.getJSON.calledOnce).to.be.true;
                })
                .then(done, done);
        })
        it('expect data.cookies.get() to make correct getJSON call', function(done) {
            data.cookies.get()
                .then(obj => {
                    const actual = requester.getJSON
                        .firstCall
                        .args[0];

                    expect(actual).to.equal('/api/cookies');
                })
                .then(done, done);
        });
        it('expect data.cookies.get() to return correct result', function(done) {
            data.cookies.get()
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
                    expect(prop[0]).to.equal('passHash');
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
                    expect(prop[0]).to.equal('passHash');
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
                    expect(actual).to.equal('/api/auth');
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
                    expect(prop[0]).to.equal('passHash');
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

    describe('Add cookie tests', function() {
        let cookiesDB = [];

        beforeEach(function() {
            sinon.stub(requester, 'postJSON', (route, cookie, options) => {
                return new Promise((resolve, reject) => {
                    cookiesDB.push(cookie);
                    // add userId to cookie?
                    resolve(cookie);
                });
            });
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
            cookiesDB = [];
        });
        afterEach(function() {
            requester.postJSON.restore();
            requester.putJSON.restore();
            localStorage.clear();
        });

        it('expect postJSON to be called for cookie', function(done) {
            data.users.login(user)
                .then(() => {
                    return data.cookies.add(cookie);
                })
                .then(() => {
                    expect(requester.postJSON.calledOnce).to.be.true;
                })
                .then(done, done);
        });
        it('expect postJSON to be called with correct route', function(done) {
            data.users.login(user)
                .then(() => {
                    return data.cookies.add(cookie);
                })
                .then(() => {
                    const actual = requester.postJSON
                        .firstCall
                        .args[0];
                    expect(actual).to.equal('/api/cookies');
                })
                .then(done, done);
        });
        it('expect postJSON to be called with the cookie', function(done) {
            data.users.login(user)
                .then(() => {
                    return data.cookies.add(cookie);
                })
                .then(() => {
                    const actual = requester.postJSON
                        .firstCall
                        .args[1];
                    expect(actual).to.eql(cookie);
                })
                .then(done, done);
        });
        it('expect postJSON to be called with authorization headers', function(done) {
            data.users.login(user)
                .then(() => {
                    return data.cookies.add(cookie);
                })
                .then(() => {
                    const actual = requester.postJSON
                        .firstCall
                        .args[2];
                    expect(actual.headers['x-auth-key']).to.equal(AUTH_KEY);
                })
                .then(done, done);
        });
        it('expect cookie to be added to cookieDB', function(done) {
            data.users.login(user)
                .then(() => {
                    return data.cookies.add(cookie);
                })
                .then(() => {
                    expect(cookiesDB).to.eql([cookie]);
                })
                .then(done, done);
        });
    });

    describe('Rate cookie tests', function() {
        let cookiesDB = [];

        beforeEach(function() {
            sinon.stub(requester, 'putJSON', (route, type, options) => {
                return new Promise((resolve, reject) => {
                    if (route === '/api/auth') {
                        resolve({
                            result: {
                                username: user.username,
                                authKey: AUTH_KEY
                            }
                        });
                        return;
                    };

                    const cookieId = +route.split('/')[3];
                    const cookieToRate = cookiesDB.find((c) => c.id === cookieId);

                    if (type.type.type === 'like') {
                        cookieToRate.likes += 1;
                    } else if (type.type.type === 'dislike') {
                        cookieToRate.dislikes += 1;
                    }

                    resolve(cookieToRate);
                });
            });
            localStorage.clear();
            cookiesDB = [cookie];
        });
        afterEach(function() {
            requester.putJSON.restore();
            localStorage.clear();
        });

        it('expect putJSON to be called for rating', function(done) {
            data.users.login(user)
                .then(() => {
                    return data.cookies.getLikes(cookie.id, { type: 'like' });
                })
                .then(() => {
                    expect(requester.putJSON.calledTwice).to.be.true;
                })
                .then(done, done);
        });
        it('expect cookie rating to be done with correct route', function(done) {
            data.users.login(user)
                .then(() => {
                    return data.cookies.getLikes(cookie.id, { type: 'like' });
                })
                .then(() => {
                    const actual = requester.putJSON
                        .secondCall
                        .args[0];
                    expect(actual).to.equal(`/api/cookies/${cookie.id}`);
                })
                .then(done, done);
        });
        it('expect cookie rating type to be the used type of rating', function(done) {
            data.users.login(user)
                .then(() => {
                    return data.cookies.getLikes(cookie.id, { type: 'like' });
                })
                .then(() => {
                    const actual = requester.putJSON
                        .secondCall
                        .args[1];
                    expect(actual.type.type).to.equal('like');
                })
                .then(done, done);
        });
        it('expect cookie rating to be called for the given cookie id', function(done) {
            data.users.login(user)
                .then(() => {
                    return data.cookies.getLikes(cookie.id, { type: 'like' });
                })
                .then(() => {
                    const actual = requester.putJSON
                        .secondCall
                        .args[2];
                    expect(actual.headers['x-auth-key']).to.equal(AUTH_KEY);
                })
                .then(done, done);
        });

        it('expect liking a cookie to increment likes value of cookie', function(done) {
            let previousLikes = cookiesDB[0].likes;

            data.users.login(user)
                .then(() => {
                    return data.cookies.getLikes(cookie.id, { type: 'like' });
                })
                .then(() => {
                    expect(cookiesDB[0].likes).to.equal(previousLikes + 1);
                })
                .then(done, done);
        });
        it('expect disliking a cookie to increment dislikes value of cookie', function(done) {
            let previousDislikes = cookiesDB[0].dislikes;

            data.users.login(user)
                .then(() => {
                    return data.cookies.getDislikes(cookie.id, { type: 'dislike' });
                })
                .then(() => {
                    expect(cookiesDB[0].dislikes).to.equal(previousDislikes + 1);
                })
                .then(done, done);
        });
    });
});

mocha.run();