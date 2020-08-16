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
    public class AuthController : ControllerBase
    {
        private readonly UserManager<AppUser> userManager;
        private readonly SignInManager<AppUser> signInManager;
        private readonly IJwtGenerator jwtTokenGenerator;

        public AuthController(
            UserManager<AppUser> userManager,
            SignInManager<AppUser> signInManager,
            IJwtGenerator jwtTokenGenerator)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.jwtTokenGenerator = jwtTokenGenerator;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            var user = await userManager.FindByNameAsync(model.Username);

            if (user == null) return BadRequest(new
            {
                result = "No user has found"
            });
            return Ok(new
                {
                    token = await jwtTokenGenerator.GenerateJwtTokenString(user)
                });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterModel model)
        {
            var user = new AppUser(model);
            var result = await userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded) return BadRequest();
            return Ok(new
                {
                    token = await jwtTokenGenerator.GenerateJwtTokenString(user)
                });
        }
        [HttpGet("logout")]
        public IActionResult LogOff()
        {
            signInManager.SignOutAsync();
            
            return Ok();
        }
    }
}