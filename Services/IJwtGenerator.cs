using System.Threading.Tasks;
using Task_Manager.Models;

namespace Task_Manager.Services
{
    public interface IJwtGenerator
    {
        Task<string> GenerateJwtTokenString(AppUser user);
    }
}