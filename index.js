const getData1 = () => {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
          let elem = document.getElementById("output");

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
        const elem = document.getElementById("output");
        debugger
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
        const elem = document.getElementById("output");
        debugger
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