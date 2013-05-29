// Generated by CoffeeScript 1.6.2
(function() {
  'Simple wrapper for a taffy database. \n\nMight be extended to back up the database to local storage, a zip file, etc.';
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.UserDatabase = (function() {
    function UserDatabase() {
      this.fromJSONArray = __bind(this.fromJSONArray, this);
      this.toString = __bind(this.toString, this);      this.database = TAFFY();
    }

    UserDatabase.prototype.toString = function() {
      return this.database().stringify();
    };

    UserDatabase.prototype.fromJSONArray = function(array) {
      return this.database.insert(array);
    };

    return UserDatabase;

  })();

}).call(this);

/*
//@ sourceMappingURL=UserDatabase.map
*/
