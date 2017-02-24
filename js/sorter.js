

var updateAllSamplesList = function () {

    var sample_container = document.getElementById('allsamples');
    
    while (sample_container.firstChild) {
	    sample_container.removeChild(sample_container.firstChild);
    }
    
    samples.forEach(function(sample) {
	new_elem = document.createElement("div");
	new_elem.className = "samplediv";
	
	new_content = document.createElement("span");
	//new_content.className = "sample";
	if (sample.score > -100) {
	    new_content.innerHTML = sample.text;
	}
	else {
	    new_content.innerHTML = "<strike>" + sample.text + "<strike>";
	}
	
	new_content2 = document.createElement("span");
	new_content2.className = "samplescore";
	new_content2.id = sample.id;
	new_content2.innerHTML = sample.score;
	
	new_elem.appendChild(new_content);
	new_elem.appendChild(new_content2);
	
	sample_container.appendChild(new_elem);
    });
}

updateAllSamplesList();


var addToList = function(sample, list) {
    new_elem = document.createElement("li");
    new_elem.className = "sample";
    new_elem.id = sample.id;
    new_elem.innerHTML = sample.text;
    list.appendChild(new_elem);
}


var list1 = document.getElementById('phonetics_list1');
var rejected_list1 = document.getElementById('rejected_list1');

var sample_index=[ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14 ];
shuffle(sample_index);

var sliceindex = 0;
var round = 0;
var test = 0;

var sliceindex = 0;


var updateSortingList = function () {
    //console.log(sliceindex +" + 5 > "+ samples.length)
    if (sliceindex + 5 > samples.length) {
	console.log("shuffling!");
	shuffle(sample_index);
	sliceindex = 0;
	round += 1;	
	document.getElementById('round').innerHTML=round;
    }
    test += 1;
    //console.log(sample_index.slice(sliceindex,sliceindex+5))
    sample_index.slice(sliceindex,sliceindex+5).forEach( function(index) {
	if (samples[ index ].score > -100) {
	    addToList(samples[index], list1 );
	}
	else {
	    addToList(samples[index], rejected_list1 );
	}
    });
    sliceindex += 5;
    document.getElementById('test').innerHTML=test;
}

updateSortingList()

var sortable1 = Sortable.create(list1, {group: "all"});
var sortable2 = Sortable.create(rejected_list1, {group: { name: "all", put: true, pull: false}});
lists_ready=true;
