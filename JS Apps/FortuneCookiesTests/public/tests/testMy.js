mocha.setup('bdd');

const { expect, assert } = chai;
describe("Tests", function() {
    describe('Get cookie test', function() {
        it('expect cookies() to return response', function() {
            return cookieController.all()
                .then(obj => {
                    expect(obj).to.exist;
                });
        });
    })
});

mocha.run();