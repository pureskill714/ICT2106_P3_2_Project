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
    
    public class ServiceCenterDonorControl
    {
       private int DonorNo;
       private IEnumerable<String> Donor;
       public void countDonorNo(){}
       private void setDonorNo(int count){}
       private void setDonor(IEnumerable<String> Donor){}
    }
}
