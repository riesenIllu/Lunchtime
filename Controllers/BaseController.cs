using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using MongoDB.Bson;

namespace LunchTime.Controllers
{
    public abstract class BaseController<TCollection> : ControllerBase
    {

        protected IMongoClient client;
        protected IMongoCollection<TCollection> collection;

        public BaseController(IMongoClient _client, string _collection)
        {
            client = _client;
            var database = client.GetDatabase("Lunchtime");
            collection = database.GetCollection<TCollection>(_collection);
        }

        [HttpPut]
        public abstract void Create(TCollection entry);
        [HttpGet]
        public abstract IEnumerable<TCollection> Read();
        [HttpPost]
        public abstract void Update(ObjectId id, TCollection entry);
        [HttpDelete]
        public abstract void Delete(ObjectId id);
    }
}
