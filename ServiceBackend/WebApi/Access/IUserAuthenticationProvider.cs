using WebApi.Access.Dto;

namespace WebApi.Access
{
    public interface IUserAuthenticationProvider
    {
        User GetUser(string login, string password);

        void Register(User user);
    }
}