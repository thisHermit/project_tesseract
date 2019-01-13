var model = {
	nav: [
		{
			header: "About Jack",
			classed: "about-nav"
		}/*,
		{
			header: "Search Paintings",
			classed: "search-nav"
		}*/,
		{
			header: "Filter",
			classed: "filter-nav"
		},
		{
			header: "Pricing",
			classed: "pricing-nav"
		}
	],

	paintings: [
		{
			name: "Self",
			src: "img/self.jpg",
			classed: "self-portrait",
			headClass: "self-head",
			height: "300",
			width: "300",
			unit: "px",
			tags: ["self", "portrait", "me", "woman", "road", "home", "house", 
				"sky"],
			tagsFirst: function() {
				this.tagsArr = ko.observableArray();
				for(var i=0; i<4; i++){

					this.tagsArr.push(this.tags[i]);
				}
				return this.tagsArr();
			},
			tagsSecond: function() {
				this.tagsArrSecond = ko.observableArray();

				for(var t=0; t<this.tags.length; t++){
					if(t>4){
						this.tagsArrSecond.push(this.tags[t]);
					}
				}

				return this.tagsArrSecond();
			},
			visibility: ko.observable(true)
		},
		{
			name: "Friendship",
			src: "img/friendship.jpg",
			classed: "friendship-portrait",
			headClass: "friendship-head",
			height: "300",
			width: "300",
			unit: "px",
			tags: ["friends", "tree", "forest", "hug", "love"],
			tagsFirst: function() {
				this.tagsArr = ko.observableArray();
				for(var i=0; i<4; i++){

					this.tagsArr.push(this.tags[i]);
				}
				return this.tagsArr();
			},
			tagsSecond: function() {
				this.tagsArrSecond = ko.observableArray();

				for(var t=0; t<this.tags.length; t++){
					if(t>4){
						this.tagsArrSecond.push(this.tags[t]);
					}
				}

				return this.tagsArrSecond();
			},
			visibility: ko.observable(true)
		},		
		{
			name: "Field",
			src: "img/field.jpg",
			classed: "field-portrait",
			headClass: "field-head",
			height: "300",
			width: "300",
			unit: "px",
			tags: ["field", "colorful", "trees", "scenic", "landscape"],
			tagsFirst: function() {
				this.tagsArr = ko.observableArray();
				for(var i=0; i<4; i++){

					this.tagsArr.push(this.tags[i]);
				}
				return this.tagsArr();
			},
			tagsSecond: function() {
				this.tagsArrSecond = ko.observableArray();

				for(var t=0; t<this.tags.length; t++){
					if(t>4){
						this.tagsArrSecond.push(this.tags[t]);
					}
				}

				return this.tagsArrSecond();
			},
			visibility: ko.observable(true)
		},	
		{
			name: "Ship",
			src: "img/ship.jpg",
			classed: "ship-portrait",
			headClass: "ship-head",
			height: "300",
			width: "300",
			unit: "px",
			tags: ["ship", "sunset", "clouds", "sky"],
			tagsFirst: function() {
				this.tagsArr = ko.observableArray();
				for(var i=0; i<4; i++){

					this.tagsArr.push(this.tags[i]);
				}
				return this.tagsArr();
			},
			tagsSecond: function() {
				this.tagsArrSecond = ko.observableArray();

				for(var t=0; t<this.tags.length; t++){
					if(t>4){
						this.tagsArrSecond.push(this.tags[t]);
					}
				}

				return this.tagsArrSecond();
			},
			visibility: ko.observable(true)
		},			
		{
			name: "Stretch",
			src: "img/stretch.jpg",
			classed: "stretch-portrait",
			headClass: "stretch-head",
			height: "150",
			width: "300",
			unit: "px",
			tags: ["stretch", "town", "people", "crowd"],
			tagsFirst: function() {
				this.tagsArr = ko.observableArray();
				for(var i=0; i<4; i++){

					this.tagsArr.push(this.tags[i]);
				}
				return this.tagsArr();
			},
			tagsSecond: function() {
				this.tagsArrSecond = ko.observableArray();

				for(var t=0; t<this.tags.length; t++){
					if(t>4){
						this.tagsArrSecond.push(this.tags[t]);
					}
				}

				return this.tagsArrSecond();
			},
			visibility: ko.observable(true)
		},		
		{
			name: "Flowers",
			src: "img/flowers.jpg",
			classed: "flowers-portrait",
			headClass: "flowers-head",
			height: "300",
			width: "300",
			unit: "px",
			tags: ["flowers", "plant", "home", "pot"],
			tagsFirst: function() {
				this.tagsArr = ko.observableArray();
				for(var i=0; i<4; i++){

					this.tagsArr.push(this.tags[i]);
				}
				return this.tagsArr();
			},
			tagsSecond: function() {
				this.tagsArrSecond = ko.observableArray();

				for(var t=0; t<this.tags.length; t++){
					if(t>4){
						this.tagsArrSecond.push(this.tags[t]);
					}
				}

				return this.tagsArrSecond();
			},
			visibility: ko.observable(true)
		}
	]
};

viewModel = {

	query: ko.observable(""),
	closureShow: ko.observableArray(),
	closureHide: ko.observableArray(),

	filter: function() {
        
        Array.prototype.contains = function(searched) {
            for (var r in this) {
                if (this[r] == searched) return true;
            }
            return false;
        };


		var that = this;

		var query = this.query();
		that.show = ko.observableArray();
		that.hide = ko.observableArray();
		that.obj = ko.observableArray();

		model.paintings.forEach(function(obj){

			that.obj.push(obj);
			var tag = obj.tags;

			tag.forEach(function(tags){
				
				var index = tags.indexOf(query);

				if(index > -1){
					
			
					that.show.push(obj);

				}
				else {
					that.hide.push(obj);		
				}
				
			})
		});
		that.filterView();
		that.obj.removeAll();
		that.show.removeAll();

	},

	filterView: function() {
		var that = this;
		this.obj().forEach(function(obj){
			if(that.show().contains(obj)){
				console.log(obj);
				obj.visibility(true);
			}
			else {
				obj.visibility(false);
			}
		})
	}

};

var description = {

	init: function() {
		console.log('describe me!');
	}
}

var nav = {

	init: function() {
		console.log(this);
		var filter = document.getElementsByClassName('search')[0];
		if(this.header === "Filter"){
			$(filter).slideDown();
		}
	}
}



var showPaintings = {

	init: function() {
		//console.log(this.classed);
		var that = this;
		this.jClass = "."+this.classed;
		this.jHeadClass = "."+this.headClass;
		//console.log(jClass);

		$(this.jHeadClass).fadeOut(function() {
			
			$(that.jClass).animate({
				opacity: 1
			}, 'fast');
			$(that.jClass).show();
		})
		
	},

	nameShow: function() {

	},

	nameHide: function() {

	}

}

ko.applyBindings(viewModel);