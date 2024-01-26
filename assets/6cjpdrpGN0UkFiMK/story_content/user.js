function ExecuteScript(strId)
{
  switch (strId)
  {
      case "690EBCG0liA":
        Script1();
        break;
  }
}

function Script1()
{
  var currentTime = new Date()
var day = currentTime.getDate()
var month = currentTime.getMonth() + 1
var year = currentTime.getFullYear()
var dateString= day + "/" + month + "/" + year
var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

