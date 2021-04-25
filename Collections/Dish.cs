using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LunchTime.Collections{

    public class Dish: Collection{

        public string Name {get; set;}
        public double Price {get; set;}

        public List<string> Ingredients {get; set;}
    }
}