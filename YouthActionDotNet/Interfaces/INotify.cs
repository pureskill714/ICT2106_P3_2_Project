
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace YouthActionDotNet.Controllers
{
    internal interface INotify<T> where T : class
    {
        private string setResourceRequest(string EDV){return null;}
    }
}