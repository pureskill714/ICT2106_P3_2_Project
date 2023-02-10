
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace YouthActionDotNet.Controllers
{
    internal interface IServiceCentre<T> where T : class
    {
        [HttpGet("{id}")]
        Task<ActionResult<string>> getServiceCenterID(string id);

        [HttpDelete("{address}")]
        Task<ActionResult<string>> getServiceCenterAddress(string address);

        [HttpDelete("{name}")]
        Task<ActionResult<string>> getServiceCenterName(string name);
    }
}