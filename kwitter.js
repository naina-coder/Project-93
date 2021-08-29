function savename()
{
    userName= document.getElementById("get_name").value;

    localStorage.setItem("get_name", get_name);
    window.location="kwitter_room.html";
}