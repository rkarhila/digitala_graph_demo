
var samples=[
    {audio: "01.wav", text: "Tvättas 1"},
    {audio: "02.wav", text: "Tvättas 2"},
    {audio: "03.wav", text: "Tvättas 3"},
    {audio: "04.wav", text: "Tvättas 4"},
    {audio: "05.wav", text: "Tvättas 5"},    
    {audio: "06.wav", text: "Tvättas 6"},
    {audio: "07.wav", text: "Tvättas 7"},
    {audio: "08.wav", text: "Tvättas 8"},
    {audio: "09.wav", text: "Tvättas 9"},
    {audio: "10.wav", text: "Tvättas 10"},    
    {audio: "11.wav", text: "Tvättas 11"},
    {audio: "12.wav", text: "Tvättas 12"},
    {audio: "13.wav", text: "Tvättas 13"},
    {audio: "14.wav", text: "Tvättas 14"},
    {audio: "15.wav", text: "Tvättas 15"},    
]


var sample_container = document.getElementById('allsamples');

samples.forEach(function(sample) {
    new_elem = document.createElement("div");
    new_elem.className = "samplediv";
    new_content = document.createElement("span");
    new_content.className = "sample";
    new_content.innerHTML = sample.text;
    new_elem.appendChild(new_content);
    sample_container.appendChild(new_elem);
});

shuffle(samples)

var addToList = function(sample, list) {
    new_elem = document.createElement("li");
    new_elem.className = "sample";
    new_elem.innerHTML = sample.text;
    list.appendChild(new_elem);
}


var list1 = document.getElementById('phonetics_list1');
var list2 = document.getElementById('phonetics_list2');
var list3 = document.getElementById('phonetics_list3');

samples.slice(0,5).forEach( function(sample) {
    addToList(sample, list1 );
});
samples.slice(5,10).forEach( function(sample) {
    addToList(sample, list2 );
});
samples.slice(10,15).forEach( function(sample) {
    addToList(sample, list3 );
});

var sortable1 = Sortable.create(list1);
var sortable2 = Sortable.create(list2);
var sortable3 = Sortable.create(list3);

shuffle(samples)

var list4 = document.getElementById('content_list1');
var list5 = document.getElementById('content_list2');
var list6 = document.getElementById('content_list3');

samples.slice(0,5).forEach( function(sample) {
    addToList(sample, list4 );
});
samples.slice(5,10).forEach( function(sample) {
    addToList(sample, list5 );
});
samples.slice(10,15).forEach( function(sample) {
    addToList(sample, list6 );
});

var sortable4 = Sortable.create(list4);
var sortable5 = Sortable.create(list5);
var sortable6 = Sortable.create(list6);


