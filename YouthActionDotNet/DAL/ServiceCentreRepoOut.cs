using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using YouthActionDotNet.Data;
using YouthActionDotNet.Models;

namespace YouthActionDotNet.DAL
{
    public class ServiceCentreRepoOut : GenericRepositoryOut<ServiceCenter>
    {   
        public ServiceCentreRepoOut(DBContext context) : base(context)
        {
            this.context = context;
            this.dbSet = context.Set<ServiceCenter>();
        }
        
        public async Task<List<ServiceCenter>> GetByServiceCenterId(string id){
            return await dbSet.Where(v => v.ServiceCenterId == id).ToListAsync();
        }
    }
}