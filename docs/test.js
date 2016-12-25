
function merge(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}

function mergeDataStreams(stream1,stream2){
  var result = [];
  for (var i = 0; i < stream1.length; i++){
    for (var j = 0; j < stream2.length; j++){
      if (stream1[i].id == stream2[j].id){
          result.push(merge(stream1[i],stream2[j]));
      }
    }
  }
  return result;
}

function recipeFactory(name, ingredients, steps) {
  var recipe = {
    name: name ,
    ingredients: ingredients.sort(),
    steps: steps,
    stepsHTML: function(){
      var html = '<ol>';
      for (var i = 0; i < this.steps.length;i++) {
        html += '<li>' + this.steps[i] + '</li>';
      }
      return html + '</ol>';
    },
    ingredientsHTML: function() {
      return '<ul>' + this.ingredients.map(
        function(ing) {return '<li>' + ing + '</li>'; }).join('') + '</ul>';
    }
  };
  
  return recipe;
}


var ra = recipeFactory('grilled cheese',
    ['2 slices bread', 'butter', '1 slice cheese'],
    ['Butter bread', 'Put cheese between bread', 'Toast bread on stove']);

console.log(ra.stepsHTML());
