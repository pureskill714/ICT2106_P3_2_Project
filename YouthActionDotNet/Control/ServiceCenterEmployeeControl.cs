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
    
    public class ServiceCenterEmployeeControl
    {
        private int EmployeeNo;
        private IEnumerable<String> Employee;


        public void countEmployeeNo(){}
        private void setEmployeeNo(int count){}
        private void setEmployee(IEnumerable<String> Employee){}
     }
}
