using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using AtRiskHistory.Repository;
using AtRiskHistory.Models;
using AtRiskHistory.Controllers;
using Microsoft.AspNetCore.Mvc.Cors.Internal;

namespace AtRiskHistory
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var connectionString = Configuration["ConnectionStrings:APIConnectionString"];
            services.AddEntityFrameworkNpgsql().AddDbContext<AtRiskHistoryContext>(opt =>
                    opt.UseNpgsql(connectionString));
            services.AddTransient<IAtRiskHistoryRepo, AtRiskHistoryRepo>();

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddCors(options =>
            {
                options.AddPolicy("AllowMyOrigin",
                builder => builder.AllowAnyHeader()
                                  .AllowAnyMethod()
                                  .AllowAnyOrigin());//WithOrigins("http://localhost:4200/"));
            });
            services.Configure<MvcOptions>(options =>
            {
                options.Filters.Add(new CorsAuthorizationFilterFactory("AllowMyOrigin"));
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseCors("AllowMyOrigin");
            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
