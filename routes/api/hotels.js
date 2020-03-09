const sendHttpRequest = (method, url, data) => {

  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = "json";

    if (data) {
      xhr.setRequestHeader('Content-Type', 'application/json');

    }

    xhr.onload = () => {
      
      if (xhr.status >= 400) {
        reject(xhr.response);

      } else {
        resolve(xhr.response);

      };
    }
    xhr.send(JSON.stringify(data));          

  })
  return promise;

};




const getAllRooms = () => {

  sendHttpRequest('GET', 'http://localhost:3000/api/rooms', true).then(
    responseData => {
      console.log(responseData);
      (responseData);
      const listRooms = responseData.map(element => {
        return (

          "<tr>" +
          "<td>" + element.roomTypes + "</td> " +
          "<td>" + element.roomsAvailable + "</td> "


        )
      })
      document.getElementById("results").innerHTML =
        "<table>" + "<tr>" +
        "<th>" + "RoomTypes" + "</th>" +
        "<th>" + "RoomsAvailable" + "</th>" +
        listRooms.join("\n") + "</table>";



      console.log(listRooms);

    }
  );
};

function createNewRoom() {
  event.preventDefault();
  var room = {
    roomTypes: document.getElementById('roomTypes').value,
    roomsAvailable: document.getElementById('roomsAvailable').value



  };
  console.log(room.roomTypes, roomsAvailable)




  sendHttpRequest("POST", "http://localhost:3000/api/rooms", room).then((data) => {
    console.log(data);
  })

} 