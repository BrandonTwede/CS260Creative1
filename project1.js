function countWords(){
    let text = document.getElementById('input_text_area').value;
    text = text.toLowerCase();
    text = text.replace(/[.,!?"')(]/g, "");
    text = text.replace(/[\n\t]/g, " ");
    let words = text.split(" ");
    let results = new Object();
    
    //Count the word occurrances
    words.forEach(function(item) {
        if (item in results){
            results[item] = results[item] + 1;
        } else {
            results[item] = 1;
        }
    });
    
    //Turn the occurrance object into and array
    var sortable = [];
    for (let item in results) {
        sortable.push([item, results[item]]);
    }
    
    //Sort the array
    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });
    sortable.reverse();
    
    let output = ""
    sortable.forEach(function(item){
        output += "<li>Count: " + item[1] + " Word: " + item[0] + "</li>";
    });
    
    document.getElementById('list_of_words').innerHTML = output;
}