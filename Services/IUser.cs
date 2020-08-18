using Task_Manager.Models;

namespace Task_Manager.Services
{
    public interface IUser
    {
        SystemHardware GetUserHardwareInfo(string id);
        void SetUserHardwareInfo(SystemHardware info);
        void Save();
    }
}