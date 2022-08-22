var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
    }
    User.prototype.display = function () {
        console.log("id=" + this.id + " name=" + this.name);
    };
    return User;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(id, name, discount) {
        var _this = _super.call(this, id, name) || this;
        _this.discount = discount;
        return _this;
    }
    Customer.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("discont =" + this.discount);
    };
    return Customer;
}(User));
var customer1 = new Customer(1, "melvin", 100);
var customer2 = new Customer(2, "brishti", 200);
customer1.display();
customer2.display();
