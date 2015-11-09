using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace wad.Models
{
    public class DocumentModels
    {
        //whether the checkbox is selected or not
        public bool bold { get; set; }
        public bool italic { get; set; }
        public DocumentModels()
        {
            bold = false;
            italic = false;
        }
    }
}
