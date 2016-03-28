var sessions = [
  {
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
      }, {
        name: "",
        instrument: "Vocals"
      }
    ]
  },
  {
    name: "Brass Quintet",
    genre: "Classical",
    host: "Rico",
    spots: [
      {
        name: "",
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

var defaultHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-header": "content-type, accept",
  "access-control-max-age": 10
}

var jsonHeader = Object.assign({'content-type': 'application/json'}, defaultHeaders)

module.exports.getSessions = function(req, res) {
  var data = JSON.stringify(sessions);
  res.set(jsonHeader);
  console.log("DATA, GETTING HERE", data);
  res.send(data);
}









