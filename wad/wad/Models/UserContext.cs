using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace wad.Models
{
    public class UserContext : DbContext
    {
        public DbSet<UserAccount> userAccount { get; set; }
    }
}