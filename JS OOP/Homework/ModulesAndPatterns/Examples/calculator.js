var controls = (function() {
    function formatShow(name, value) {
        return `${name} says the result is ${value}`;
    }
    class Calculator {
        constructor(name) {
            this.name = name;
            this.result = 0;
        }
        add(x) {
            this.result += +x;
            return this;
        }

        subtract(x) {
            this.result -= +x;
            return this;
        }

        showResult() {
            console.log(formatShow(this.name, this.result));
            return this;
        }
    }
    return {
        getCalculator: (name) => new Calculator(name)
    };
}());
controls.getCalculator("Elza").add(25).add(25).showResult().subtract(10).showResult().subtract(40).showResult();