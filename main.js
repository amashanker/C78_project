var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg","https://i.postimg.cc/5ymDKL83/bro.jpg","https://cdn.shoplightspeed.com/shops/623681/files/32140602/1600x2048x1/mi-and-fi-lil-bro.jpg"]
var names = ["Family Book","Dad", "Mum", "Vishwak", "Vashishta",];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    
    var updatedImage = images[i];
    
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
