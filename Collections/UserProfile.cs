using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LunchTime.Collections{

    public class UserProfile: Collection{

        public string UserName {get; set;}
        
    }
}