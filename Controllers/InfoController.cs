using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Task_Manager.Models;
using Task_Manager.Services;

namespace Task_Manager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class InfoController : ControllerBase
    {
        private readonly IUser userManager;
        public InfoController(IUser userManager)
        {
            this.userManager = userManager;
        }
        [HttpGet]
        public IActionResult Get(string id)
        {
            return Ok(userManager.GetUserHardwareInfo(id));
        }
        [HttpPost]
        public IActionResult Post(SystemHardware info)
        {
            userManager.SetUserHardwareInfo(info);
            userManager.Save();
            
            return Ok();
        }

    }
}