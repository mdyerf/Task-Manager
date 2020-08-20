using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Task_Manager.Models;
using Task_Manager.Services;

namespace Task_Manager.Controllers
{
    [Route("api/[controller]/{action?}")]
    [ApiController]
    [AllowAnonymous]
    public class InfoController : ControllerBase
    {
        private readonly IUser userManager;
        private readonly UserManager<AppUser> _userInfoManager;
        public InfoController(IUser userManager, UserManager<AppUser> userInfoManager)
        {
            this.userManager = userManager;
            _userInfoManager = userInfoManager;
        }
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            return Ok(userManager.GetUserHardwareInfo(id));
        }
        [AllowAnonymous]
        [HttpPost]
        public IActionResult PostInfo(string username, string windowsVersion, 
            string cpuName, string cpuModel,
            string ramStorage, string ramModel, string hddStorage)
        {
            var info = new SystemHardware() 
            {
                WindowsVersion = windowsVersion,
                CpuName = cpuName, CpuModel = cpuModel,
                RamModel = ramModel, RamStorage = ramStorage,
                HddStorage = hddStorage
            };

            info.UserId = _userInfoManager.GetUserIdAsync(
                _userInfoManager.FindByNameAsync(username).Result
            ).Result;
            
            if(info.UserId == null) return BadRequest();

            userManager.SetUserHardwareInfo(info);
            userManager.Save();

            return Ok();
        }

    }
}