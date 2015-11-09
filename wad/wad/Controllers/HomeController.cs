using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using wad.Models;

namespace wad.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            DocumentModels model = new DocumentModels();
            return View(model);
        }    
    }
}