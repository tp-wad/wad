using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(wad.Startup))]
namespace wad
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
