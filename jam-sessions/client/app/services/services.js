angular.module('jam-sessions.services', [])
.factory('Sessions', function($http){

  var Sessions = [
    {
      sessionID: 0,
      sessionName: "Rock Band",
      genre: "Classic Rock",
      host: "Alice",
      location: "MakerSquare",
      date: "2016-04-02T20:45:00",
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
          name: "",
          instrument: "Bass Guitar"
        }
      ]
    },
    {
      sessionID: 1,
      sessionName: "Brass Quintet",
      genre: "Classical",
      host: "Rico",
      location: "MakerSquare",
      date: "2016-04-22T18:00:00",
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
