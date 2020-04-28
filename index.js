const elem = document.getElementById("output");


const getData1 = () => {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {

          elem.innerHTML += "----- getElementsByTagName -----<br/>";
          let docelem = xmlhttp.responseXML.documentElement;
          let nodes = docelem.getElementsByTagName("artist");
          for (i = 0; i < nodes.length; i++) {
            elem.innerHTML += nodes[i].tagName + ":" + nodes[i].textContent + "<br/>";
          }

          nodes = docelem.getElementsByTagName("title");
          for (i = 0; i < nodes.length; i++) {
            elem.innerHTML += nodes[i].tagName + ":" + nodes[i].textContent + "<br/>";
          }

          nodes = docelem.getElementsByTagName("year");
          for (i = 0; i < nodes.length; i++) {
            elem.innerHTML += nodes[i].tagName + ":" + nodes[i].textContent + "<br/>";
          }
          elem.innerHTML += "----------<br/>";
        } else {
          alert("status = " + xmlhttp.status);
        }
      }
    }
    xmlhttp.open("GET", "album.xml");
    xmlhttp.send();
}

const getData2 = () => {
  let xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
      if (xmlhttp.status == 200) {
        elem.innerHTML += "----- getElementsByTagName -----<br/>";
        const docelem = xmlhttp.responseXML.documentElement;
        const nodes = docelem.getElementsByTagName("album");
        for (i = 0; i < nodes.length; i++) {
          const namenodes = nodes[i].getElementsByTagName("artist");
          elem.innerHTML += namenodes[0].tagName + ":" + namenodes[0].textContent + "<br/>";
          const heightnodes = nodes[i].getElementsByTagName("title");
          elem.innerHTML += heightnodes[0].tagName + ":" + heightnodes[0].textContent + "<br/>";
          const weightnodes = nodes[i].getElementsByTagName("year");
          elem.innerHTML += weightnodes[0].tagName + ":" + weightnodes[0].textContent + "<br/>";

          elem.innerHTML += "======<br/>";
        }
        elem.innerHTML += "----------<br/>";
      } else {
        alert("status = " + xmlhttp.status);
      }
    }
  }
  xmlhttp.open("GET", "album.xml");
  xmlhttp.send();
}

const getData3 = () => {
  let xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
      if (xmlhttp.status == 200) {
        
        const docelem = xmlhttp.responseXML.documentElement;
        const albumList = docelem.getElementsByTagName("album");
  
        elem.innerHTML += "----- getElementsByTagName -----<br/>";
        
        const olAlbum = document.createElement("ol")
        for (i = 0; i < albumList.length; i++) {
          let artistnodes = albumList[i].getElementsByTagName("artist");
          let titlenodes = albumList[i].getElementsByTagName("title");
          let yearnodes = albumList[i].getElementsByTagName("year");
          let awardsList = albumList[i].getElementsByTagName("awards");
          let awardnodes = awardsList[0].getElementsByTagName("grammy");
           const liAlbum = document.createElement("li")
            const ulDetails = document.createElement("ul")
              liAlbum.innerText = `Album Title: ${titlenodes[0].textContent}`
              const liArtist = document.createElement("li")
              liArtist.innerText = `Artist Name: ${artistnodes[0].textContent}`
              const liYear = document.createElement("li")
              liYear.innerText = `Release Year : ${yearnodes[0].textContent}`
              const liAwards = document.createElement("li")
              liAwards.innerText = `Awards:`
                const ulAwards = document.createElement("ul")
                  const liAward = document.createElement("li")
                  liAward.innerText = `${awardnodes[0].tagName} : ${awardnodes[0].textContent}`
                  ulAwards.append(liAward)
              liAwards.append(ulAwards)
            ulDetails.append(liArtist,liYear, liAwards)
           liAlbum.append(ulDetails)
        olAlbum.appendChild(liAlbum)
        }
        elem.appendChild(olAlbum)
        elem.innerHTML += "---------------------------------<br/>";
      } else {
        alert("status = " + xmlhttp.status);
      }
    }
  }
  xmlhttp.open("GET", "album.xml");
  xmlhttp.send();
}