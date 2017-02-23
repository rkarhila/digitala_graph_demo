
var updateOrder = function(evt1, evt2) {
    if (lists_ready) {
	console.log("Lists ready and function called!");

	var list1 = document.getElementById('phonetics_list1');
	var list2 = document.getElementById('phonetics_list2');
	var list3 = document.getElementById('phonetics_list3');

	var list4 = document.getElementById('content_list1');
	var list5 = document.getElementById('content_list2');
	var list6 = document.getElementById('content_list3');

	var lists = [ list1, list2, list3, list4, list5, list6 ];

	var grand_list = document.getElementById('finalorderlist');
	while (grand_list.firstChild) {
	    grand_list.removeChild(grand_list.firstChild);
	}

	var addToList = function(sample, list) {
	    console.log(sample);
	    new_elem = document.createElement("li");
	    new_elem.className = "ordered_sample";
	    new_elem.innerHTML = sample.innerHTML;
	    list.appendChild(new_elem);
	}

	lists.forEach(function(list) {
	    list.childNodes.forEach( function(sample, position) {
		if (sample.className == "sample")
		    addToList(sample, grand_list);
	    });
	});

    }
    else
	console.log("Lists not ready: ", lists_ready)
}

