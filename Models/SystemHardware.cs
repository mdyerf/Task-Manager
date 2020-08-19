using System.ComponentModel.DataAnnotations;

namespace Task_Manager.Models
{
    public class SystemHardware
    {
        public SystemHardware() {}
        [Key]
        public int Id { get; set; }
        public string WindowsVersion { get; set; }
        public string CpuName { get; set; }
        public string CpuModel { get; set; }
        public string RamModel { get; set; }
        public string RamStorage { get; set; }
        public string HddStorage { get; set; }
        public string UserId { get; set; }
    }
}