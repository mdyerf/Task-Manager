using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Task_Manager.Models;

namespace Task_Manager.Context
{
    public class ApplicationDbContext : IdentityDbContext<
        AppUser,
        IdentityRole,
        string,
        IdentityUserClaim<string>,
        IdentityUserRole<string>,
        IdentityUserLogin<string>,
        IdentityRoleClaim<string>,
        IdentityUserToken<string>>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }
        public DbSet<SystemHardware> Informations {get; set;}
    }
}