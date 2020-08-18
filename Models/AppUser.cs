using Microsoft.AspNetCore.Identity;

namespace Task_Manager.Models
{
    public class AppUser : IdentityUser
    {
        
        public AppUser()
        {
            
        }
        public AppUser(RegisterModel model)
        {
            this.Email = model.Email;
            this.UserName = model.Username;
        }
        public virtual SystemHardware Info { get; set; }
    }
}