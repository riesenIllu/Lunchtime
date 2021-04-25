using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using MongoDB.Bson;

namespace LunchTime.Controllers{
    [ApiController]
    [Route("[controller]")]
    public class DishController : BaseController<Collections.Dish> {

        public DishController(IMongoClient _client): base(_client, "Dishes"){

        }

        [HttpPut]
        public override void Create(Collections.Dish entry) {

        }
        [HttpGet]
        public override IEnumerable<Collections.Dish> Read() {
            return this.collection.AsQueryable().ToList<Collections.Dish>();
        }
        [HttpPost]
        public override void Update(Collections.Dish _entry) {
            // var entry = this.collection.Find(d => d.Id == _id);

        }
        [HttpDelete]
        public override void Delete(ObjectId id) {
            // this.collection.DeleteOne()
        }
    }
}