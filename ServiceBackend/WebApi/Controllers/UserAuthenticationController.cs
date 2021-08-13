using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using WebApi.Access;
using WebApi.Access.Dto;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class UserAuthenticationController : Controller
    {
        private const string AuthCookieKey = "authToken";
        private readonly IUserAuthenticationProvider userAuthenticationProvider;

        public UserAuthenticationController(IUserAuthenticationProvider userAuthenticationProvider)
        {
            this.userAuthenticationProvider = userAuthenticationProvider;
        }

        [HttpPost]
        public IActionResult Login(string login, string password)
        {
            User user = userAuthenticationProvider.GetUser(login, password);
            if (user != null)
            {
                Response.Cookies.Append(AuthCookieKey, user.Id.ToString());
                return new JsonResult(JsonSerializer.Serialize(user));
            }

            return new BadRequestResult();
        }

        [HttpPost]
        public void Register(User user)
        {
            userAuthenticationProvider.Register(user);
        }
    }
}