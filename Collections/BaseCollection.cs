using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LunchTime.Collections
{
    public abstract class Collection {
        [BsonId]
        public ObjectId Id {get; set;}
    }
}