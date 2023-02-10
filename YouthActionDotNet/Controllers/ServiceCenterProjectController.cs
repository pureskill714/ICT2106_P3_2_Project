using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using YouthActionDotNet.Control;
using YouthActionDotNet.DAL;
using YouthActionDotNet.Data;
using YouthActionDotNet.Models;

namespace YouthActionDotNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceCenterProjectController
    {
        private IEnumerable<String> project; 
       public string getProjectId(){return null;}
       public string getAllProjectStatus(){return null;}
       public string getProjectDetails(string Project_Id){return null;}
       public void getRequestFormDetails(string RRF_id, DateTime RRF_Date, DateTime RRF_Time, string RRF_resourceType, string RRF_reasons, string RRF_requestedby, string RRF_Status, string ProjectId){}
       
        public string fetchAll(){return null;}
    }

}
