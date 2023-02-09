localStorage.setItem("f", 1)

function back() {
  x = Number(localStorage.f)
  if(x == 1) {
    localStorage.setItem("f", 5)
    $("#topnav-text").text("5. Letzte Jahre, Tod und Vermächtnis")
    $("#f-1").addClass("iv")
    $("#f-3").removeClass("iv")
  } else if(x == 2) {
    localStorage.setItem("f", 1)
    $("#topnav-text").text("1. Der Weg zu Diokletian")
    $("#f-2-1").addClass("iv")
    $("#f-1").removeClass("iv")
  } else if(x == 3) {
    localStorage.setItem("f", 2)
    $("#topnav-text").text("2. Frühe Jahre und Aufstieg zur Macht")
    $("#f-2-2").addClass("iv")
    $("#f-2-1").removeClass("iv")
  } else if(x == 4) {
    localStorage.setItem("f", 3)
    $("#topnav-text").text("3. Errichtung der Tetrarchie")
    $("#f-2-3").addClass("iv")
    $("#f-2-2").removeClass("iv")
  } else if(x == 5) {
    localStorage.setItem("f", 4)
    $("#topnav-text").text("4. Reformen des Diokletian")
    $("#f-3").addClass("iv")
    $("#f-2-3").removeClass("iv")
  }
}

function next() {
  x = Number(localStorage.f)
  if(x == 1) {
    localStorage.setItem("f", 2)
    $("#topnav-text").text("2. Frühe Jahre und Aufstieg zur Macht")
    $("#f-1").addClass("iv")
    $("#f-2-1").removeClass("iv")
  } else if(x == 2) {
    localStorage.setItem("f", 3)
    $("#topnav-text").text("3. Errichtung der Tetrarchie")
    $("#f-2-1").addClass("iv")
    $("#f-2-2").removeClass("iv")
  } else if(x == 3) {
    localStorage.setItem("f", 4)
    $("#topnav-text").text("4. Reformen des Diokletian")
    $("#f-2-2").addClass("iv")
    $("#f-2-3").removeClass("iv")
  } else if(x == 4) {
    localStorage.setItem("f", 5)
    $("#topnav-text").text("5. Letzte Jahre, Tod und Vermächtnis")
    $("#f-2-3").addClass("iv")
    $("#f-3").removeClass("iv")
  } else if(x == 5) {
    localStorage.setItem("f", 1)
    $("#topnav-text").text("1. Der Weg zu Diokletian")
    $("#f-3").addClass("iv")
    $("#f-1").removeClass("iv")
  }
}

$("#ar-l").click(back)
$("body").keydown(function() {
  if(event.which == 8) {
    back()
  }
})

$("#ar-r").click(next)
$("body").keydown(function() {
  if(event.which == 13) {
    next()
  }
})