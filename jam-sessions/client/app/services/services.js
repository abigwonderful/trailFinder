angular.module('jam-sessions.services', [])
.factory('Sessions', function($http){

  var Sessions = [
    {
      sessionID: 0,
      name: "Rock Band",
      genre: "Classic Rock",
      host: "Alice",
      spots: [
        {
          name: "Bob",
          instrument: "Guitar"
        },
        {
          name: "Alice",
          instrument: "Piano"
        },
        {
          name: "",
          instrument: "Drummer"
        },
        {
          name: "",
          instrument: "Vocals"
        },
        {
          name: "Rico",
          instrument: "Bass Guitar"
        }
      ]
    },
    {
      sessionID: 1,
      name: "Brass Quintet",
      genre: "Classical",
      host: "Rico",
      spots: [
        {
          name: "Anthony",
          instrument: "Trumpet 1"
        },
        {
          name: "",
          instrument: "Trumpet 2"
        },
        {
          name: "",
          instrument: "French Horn"
        },
        {
          name: "Rico",
          instrument: "Trombone"
        },
        {
          name: "",
          instrument: "Tuba"
        }
      ]
    }
  ];

  var getSessions = function(){
    return Promise.resolve(Sessions);

    // return $http({
    //   method: 'GET',
    //   url: 'api/sessions'
    // })
    // .then(function(resp) {
    //   console.log("resp", resp);
    //   return resp.data
    // })
  }

  var signup = function(session){
    Sessions[session.sessionID] = session;
  }

  return {
    getSessions: getSessions,
    signup: signup
  }
})
