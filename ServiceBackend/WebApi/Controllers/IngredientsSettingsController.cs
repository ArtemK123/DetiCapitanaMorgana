using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using WebApi.IngredientsSettings;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class IngredientsSettingsController : Controller
    {
        private const string AuthCookieKey = "authToken";
        private readonly IIngredientsSettingsCollisionsProvider ingredientsSettingsCollisionsProvider;

        public IngredientsSettingsController(IIngredientsSettingsCollisionsProvider ingredientsSettingsCollisionsProvider)
        {
            this.ingredientsSettingsCollisionsProvider = ingredientsSettingsCollisionsProvider;
        }

        [HttpGet]
        public IActionResult GetForbiddenIngredients(string guidIdentifier)
        {
            if (!HttpContext.Request.Cookies.Keys.Contains(AuthCookieKey))
            {
                return new ForbidResult();
            }

            if (int.TryParse(HttpContext.Request.Cookies[AuthCookieKey], out int userId))
            {
                return new JsonResult(JsonSerializer.Serialize(ingredientsSettingsCollisionsProvider.GetCollidingIngredients(userId, guidIdentifier)));
            }

            return new BadRequestResult();
        }
    }
}