using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using YouthActionDotNet.Controllers;
using YouthActionDotNet.DAL;
using YouthActionDotNet.Data;
using YouthActionDotNet.Models;

namespace YouthActionDotNet.Control
{
    
    public class ServiceCenterProjectControl
    {
        private IEnumerable<String> project;
       public string filterProject(string Category){return null;}
       public string searchProject(string Category, String Project_Id){return null;}

       private void setProject(IEnumerable<String> project_Id) {}

        public string fetchAll(){return null;}
    }
}
