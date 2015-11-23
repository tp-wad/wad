using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using wad.Models;
using System.Drawing;
using System.IO;

namespace wad.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            DocumentModels model = new DocumentModels();

            return View(model);
        }

        
        [HttpPost]
        public ActionResult Index(HttpPostedFileBase file)
        {
            // Verify that the user selected a file
            if (file != null && file.ContentLength > 0)
            {
                
                // Read bytes from http input stream
                BinaryReader b = new BinaryReader(file.InputStream);
                byte[] binData = b.ReadBytes(Convert.ToInt32(file.InputStream.Length));

                string result = System.Text.Encoding.UTF8.GetString(binData);
                
                System.IO.File.WriteAllText("~/Views/Home/Documents/Document2.cshtml", result);
                
            }
            // redirect back to the index action to show the form once again
            return RedirectToAction("Index");
        }
        

        public ActionResult GetHtmlPage(int num = 1)
        {
            string path = "~/Views/Home/Documents/Document" + num + ".cshtml";
            return PartialView(path, this);
        }
        
    }
}