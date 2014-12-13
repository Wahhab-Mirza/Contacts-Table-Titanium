var win = Ti.UI.createWindow();
var table = Ti.UI.createTableView({});
var contacts = ["Adam", "Andrew", "Boris", "Claus", "Debby", 'Saba', 'Sana', 'Wahhab', 'Zohaib', 'Zzaid', 'Zzxad'];
var curheader = 'A';
var sectionArr = [];
var index = [];
for (var i = 0,
    lastL,
    l,
    currSection,
    ilen = contacts.length; i < ilen; i++) {
	l = contacts[i].substr(0, 1);
	if (lastL != l) {
		index.push({
			title : l,
			index : i
		});
		currSection = Ti.UI.createTableViewSection({
			headerTitle : l
		});
		sectionArr.push(currSection);
	}
	currSection.add(Ti.UI.createTableViewRow({
		title : contacts[i],

	}));
	lastL = l;

}
table.setData(sectionArr);
table.index = index;
win.add(table);
win.open();
