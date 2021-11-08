function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var panel = document.getElementsByClassName("panel historypanel");

for (var i = 0; i < panel.length; i++) {
	var info = panel[i].getElementsByTagName("div")[1];
	var url = info.getElementsByTagName('a')[0].href;
	var cpid = getParameterByName('cpid', url);

	var tag = document.createElement("a");

	var url = "https://ide.usaco.guide/usaco/" + cpid;
	info.innerHTML += '&nbsp; | &nbsp; <a href="' + url + '">Open in IDE</a>';

	console.log(cpid);
}	