using WebApi.Repositories.Access.Dto;

namespace WebApi.Repositories.Access
{
    public interface IUserRepository
    {
        public UserDatabaseDto GetUser(int userId);

        public UserDatabaseDto GetUserByCredentials(string login, string password);

        public void AddUser(UserDatabaseDto userDatabaseDto);
    }
}