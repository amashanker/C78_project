var images = ["https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51-8FZDrnsL._AC_SY1000_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com.au%2FFamily-Book-Todd-Parr%2Fdp%2F0316070408&tbnid=imOtJ6GbBemCNM&vet=12ahUKEwjoiZWU9eP4AhU6KbcAHTDlDCgQMygAegUIARC3Ag..i&docid=MRaDCm9Tn81DgM&w=500&h=500&q=family%20book&ved=2ahUKEwjoiZWU9eP4AhU6KbcAHTDlDCgQMygAegUIARC3Ag","https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdreamworks%2Fimages%2F0%2F0e%2FTed_templeton_boss_baby.png%2Frevision%2Flatest%2Fscale-to-width-down%2F1200%3Fcb%3D20170819022542&imgrefurl=https%3A%2F%2Fdreamworks.fandom.com%2Fwiki%2FTed_Templeton&tbnid=6Gekl6JbOx7UtM&vet=12ahUKEwi8pqK19eP4AhVDnNgFHRlhCtwQMygAegUIARC4AQ..i&docid=JzvvaRpOe5qohM&w=1200&h=2178&q=tim%20father%20boss%20baby&ved=2ahUKEwi8pqK19eP4AhVDnNgFHRlhCtwQMygAegUIARC4AQ","https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdreamworks%2Fimages%2F2%2F20%2FJanice_templeton_boss_baby.png%2Frevision%2Flatest%3Fcb%3D20170819023028&imgrefurl=https%3A%2F%2Fdreamworks.fandom.com%2Fwiki%2FJanice_Templeton&tbnid=OfC1r_0emNHokM&vet=12ahUKEwiLg8m-9eP4AhXQi9gFHQgHDJQQMygAegUIARCtAQ..i&docid=2MeUoUE3iauF-M&w=2000&h=4865&q=tim%20mother%20boss%20baby&ved=2ahUKEwiLg8m-9eP4AhXQi9gFHQgHDJQQMygAegUIARCtAQ","https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdreamworks%2Fimages%2F1%2F10%2FTim-templeton-pose.png%2Frevision%2Flatest%3Fcb%3D20170423175703&imgrefurl=https%3A%2F%2Fdreamworks.fandom.com%2Fwiki%2FTim_Templeton&tbnid=QioP8ckpXUPYsM&vet=12ahUKEwjD2I7P9eP4AhWHrmMGHabDA5UQMygAegUIARDQAQ..i&docid=uvflpr8WLKbN4M&w=280&h=640&q=tim%20boss%20baby&ved=2ahUKEwjD2I7P9eP4AhWHrmMGHabDA5UQMygAegUIARDQAQ","https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdreamworks%2Fimages%2F3%2F37%2FNew_Boss_Baby.png%2Frevision%2Flatest%3Fcb%3D20201126142713&imgrefurl=https%3A%2F%2Fdreamworks.fandom.com%2Fwiki%2FTheodore_Templeton&tbnid=XsGIkFMOrgAqXM&vet=12ahUKEwj9qPre9eP4AhVFK7cAHSsLDjEQMygBegUIARDQAQ..i&docid=fLnbMAOndwLSLM&w=292&h=545&q=boss%20baby&ved=2ahUKEwj9qPre9eP4AhVFK7cAHSsLDjEQMygBegUIARDQAQ"]
var names = ["Family Book","Dad", "Mum", "Vishwak", "Vashishta",];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    
    var updatedImage = images[i];
    
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
