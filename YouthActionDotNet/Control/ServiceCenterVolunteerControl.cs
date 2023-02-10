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
    
    public class ServiceCenterVolunteerControl
    {
        private int VolunteerNo;
        private IEnumerable<String> Volunteer;

        public void countVolunteerNo(){}
        private void setVolunteerNo(int count){}

        private void setVolunteer(IEnumerable<String> Volunteer){}

    }
}
