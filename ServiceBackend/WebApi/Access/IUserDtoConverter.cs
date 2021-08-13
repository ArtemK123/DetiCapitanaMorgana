using WebApi.Access.Dto;
using WebApi.Repositories.Access.Dto;

namespace WebApi.Access
{
    public interface IUserDtoConverter
    {
        User ConvertToClientDtos(UserDatabaseDto userDatabaseDto);

        UserDatabaseDto ConvertToDatabaseDtos(User userDatabaseDto);
    }
}