(function () {
  angular
      .module('divkick.container', [])
      .controller('ContainerCtrl', ContainerCtrl)
      .$inject = ['$firebaseArray'];
  /* @ngInject */
  function ContainerCtrl($firebaseArray ) {
    /* jshint validthis: true */
    var main = this;
    var randomRoomId = Math.round(Math.random() * 100000000);
    var ref = new Firebase("https://div-kick.firebaseio.com/room" + randomRoomId);
    main.room = $firebaseArray(ref);
    main.room.$add({
      from: 'hey',
      content: 'yah'
    });

    //
    main.title = 'div kick';

    activate();

    ////////////////

    function activate() {
      console.log(main.title)
    }
  }
})();

