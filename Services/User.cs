using System;
using System.Linq;
using Task_Manager.Models;
using Task_Manager.Context;

namespace Task_Manager.Services
{
    public class User : IUser
    {
        private readonly ApplicationDbContext _db;
        public User(ApplicationDbContext db)
        {
            _db = db;
        }
        public SystemHardware GetUserHardwareInfo(string id)
        {
            try
            {
                return _db.Informations.Single(i => i.UserId == id);
            }
            catch(Exception)
            {
                return null;
            }
        }
        public void SetUserHardwareInfo(SystemHardware info)
        {
            _db.Informations.Add(info);
        }
        public void Save()
        {
            _db.SaveChanges();
        }
    }
}