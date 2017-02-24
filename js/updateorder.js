
var updateOrder = function(samples) {
    if (lists_ready) {
	console.log("Lists ready and function called!");

	var list1 = document.getElementById('phonetics_list1');
	lists = [ list1 ];

	score_to_give=2;

	var grand_list = document.getElementById('finalorderlist');

	while (list1.firstChild) {
	    if (list1.firstChild.className = "sample") {
		console.log("First child:");
		console.log(list1.firstChild);
		console.log(list1.firstChild.id);
		if (typeof(list1.firstChild.id) != 'undefined') {
		    samples[list1.firstChild.id].score += score_to_give;
		    score_to_give -= 1;
		}
	    }
	    list1.removeChild(list1.firstChild);	    
	}
	   
	updateAllSamplesList();

	while (grand_list.firstChild) {
	    grand_list.removeChild(grand_list.firstChild);
	    
	}

	var addToList2 = function(index, list) {
	    console.log(samples);
	    console.log(index);
	    sample = samples[index[0]];
	    //console.log(sample);

	    new_elem = document.createElement("div");
	    new_elem.className = "samplediv";
	    new_elem.innerHTML = sample.text;
	    list.appendChild(new_elem);
	    list.insertBefore(new_elem, list.firstChild);
	}

	sortable=[];
	
	samples.forEach(function(sample) {
	    //console.log(sample)
	    sortable.push([sample.id, sample.score])
	});
	sortable.sort(function(a, b) {
	    return a[1] - b[1]
	})

	sortable.forEach(function(index) {
	    addToList2(index, grand_list);
	});

	updateSortingList();

    }
    else
	console.log("Lists not ready: ", lists_ready)
}

