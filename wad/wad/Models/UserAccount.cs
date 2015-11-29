using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace wad.Models
{
    public class UserAccount
    {
        [Key]
        public int userId { get; set; }

        [Required(ErrorMessage = "Username required")]
        public string userName { get; set; }

        [Required(ErrorMessage = "Password required")]
        [DataType(DataType.Password)]
        public string userPw { get; set; }

        [Compare("userPw", ErrorMessage = "Passwords must match")]
        [DataType(DataType.Password)]
        public string userConfirm { get; set; }
    }
}