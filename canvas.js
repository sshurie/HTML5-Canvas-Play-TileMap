var sprite_sheet = new Image();
sprite_sheet.src = "./16x16_medieval_pack/tileset.png";

var map = {
	rows: 25,
	cols: 25,
	tsize: 16,
	water_tiles: [ 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171,
				  170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170,
				  171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171,
				  170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170,
				  171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171,
				  170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170,
				  171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171,
				  170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170,
				  171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171,
				  170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170,
				  171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171,
				  170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170,
				  171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171,
				  170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170,
				  171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171,
				  170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170,
				  171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171,
				  170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170,
				  171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171,
				  170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170,
				  171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171,
				  170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170,
					171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171,
				  170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170,
				  171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171, 170, 171],
				  
	land_tiles: [ 
				  null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				  null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				  null, null, null, null, null, null, null, null, 196, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 198, null, null, null, null,
				  null, null, null, null, null, null, null, null, 203, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 205, null, null, null, null,
				  null, null, null, null, null, null, null, null, 203, 3, 0, 1, 2, 1, 0, 1, 0, 1, 0, 1, 205, null, null, null, null,
				  null, null, null, null, null, null, null, null, 203, 0, 1, 0, 1, 0, 3, 0, 1, 0, 3, 0, 205, null, null, null, null,
				  null, null, 196, 197, 197, 197, 197, 197, 191, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 205, null, null, null, null,
				  null, null, 203, 0, 1, 2, 1, 0, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 3, 0, 189, 197, 198, null, null,
				  null, null, 203, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 205, null, null,
				  null, null, 203, 0, 1, 0, 1, 0, 3, 0, 1, 2, 1, 0, 1, 0, 3, 0, 1, 0, 1, 0, 205, null, null,
				  null, null, 203, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 205, null, null, 
				  null, null, 203, 0, 1, 0, 1, 0, 3, 0, 1, 2, 1, 0, 1, 0, 3, 0, 1, 0, 1, 0, 205, null, null, 
				  null, null, 203, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 205, null, null,
				  null, null, 203, 0, 1, 0, 1, 0, 3, 2, 1, 2, 1, 0, 1, 0, 3, 0, 1, 0, 1, 0, 205, null, null,
				  null, null, 203, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 205, null, null, 
				  null, null, 203, 0, 1, 0, 1, 0, 3, 0, 1, 2, 1, 0, 1, 0, 3, 0, 1, 0, 1, 3, 205, null, null,
				  null, null, 203, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 1, 0, 1, 205, null, null,
				  null, null, 203, 0, 1, 0, 1, 0, 3, 0, 1, 2, 1, 0, 1, 0, 3, 0, 2, 3, 1, 0, 205, null, null,
				  null, null, 210, 211, 211, 211, 211, 211, 211, 211, 211, 177, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 205, null, null, null,
				  null, null, null, null, null, null, null, null, null, null, 203, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 205, null, null, null,
				  null, null, null, null, null, null, null, null, null, null, 203, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 205, null, null, null,
				  null, null, null, null, null, null, null, null, null, null, 203, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 205, null, null, null,
				  null, null, null, null, null, null, null, null, null, null, 210, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 212, null, null, null,
				  null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				  null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,],
				  
		object_tiles: [ null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				  null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				  null, null, null, null, null, null, null, null, null, null, null, null,null, null, null, null, null, null, null, null, null, null, null, null, null,
				  null, null, null, null, null, null, null, null, null, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, null, null, null, null, null,
				  null, null, null, null, null, null, null, null, 203, 3, 0, 1, 2, 1, 0, 1, 0, 1, 0, 1, null, null, null, null, null,
				  null, null, null, null, null, null, null, null, 203, 0, 1, 0, 1, 0, 3, 0, 1, 0, 3, 0, null, null, null, null, null,
				  null, null, 196, 197, 197, 197, 197, 197, 191, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, null, null, null, null, null,
				  null, null, 203, 0, 1, 2, 1, 0, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 3, 0, 189, 197, null, null, null,
				  null, null, 203, 1, 0, 1, 0, 1, 0, 1, 0, 1, 70, 71, 71, 71, 72, 1, 0, 1, 0, 1, null, null, null,
				  null, null, 203, 0, 1, 0, 1, 0, 3, 0, 1, 2, 1, 0, 46, 47, 79, 0, 1, 0, 1, 0, null, null, null,
				  null, null, 203, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 53, 54, 79, 1, 0, 1, 0, 1, null, null, null, 
				  null, null, 203, 0, 1, 0, 1, 0, 3, 0, 1, 21, 1, 0, 1, 0, 86, 0, 1, 0, 1, 0, null, null, null, 
				  null, null, 203, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, null, null, null,
				  null, null, 203, 0, 1, 0, 1, 0, 3, 2, 1, 2, 1, 0, 1, 0, 3, 0, 1, 0, 1, 0, 205, null, null,
				  null, null, 203, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 205, null, null, 
				  null, null, 203, 0, 1, 0, 1, 0, 3, 0, 1, 2, 1, 0, 1, 0, 3, 0, 1, 0, 1, 3, 205, null, null,
				  null, null, 203, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 1, 0, 1, 205, null, null,
				  null, null, 203, 0, 1, 0, 1, 0, 3, 0, 1, 2, 1, 0, 1, 0, 3, 0, 2, 3, 1, 0, 205, null, null,
				  null, null, 210, 211, 211, 211, 211, 211, 211, 211, 211, 177, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 205, null, null, null,
				  null, null, null, null, null, null, null, null, null, null, 203, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 205, null, null, null,
				  null, null, null, null, null, null, null, null, null, null, 203, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 205, null, null, null,
				  null, null, null, null, null, null, null, null, null, null, 203, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 205, null, null, null,
				  null, null, null, null, null, null, null, null, null, null, 210, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 212, null, null, null,
				  null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				  null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	
	getTile: function(arr, row, col){
		if(arr === "water_tiles") {
			return this.water_tiles[row * map.cols + col];
		} else if(arr === "land_tiles") {
			return this.land_tiles[row * map.cols + col];
		} else if(arr === "object_tiles") {
			return this.object_tiles[row * map.cols + col];
		}
		
	},
	
	// row and column specify the desired location of the tile
	drawTile: function(tile, col, row) {
		var frame = document.getElementById('window');
		var ctx = frame.getContext('2d');
		// find source row and column position
		var r = Math.round(tile / 7);
		var c = tile % 7;
		var x = c * map.tsize;
		var y = r * map.tsize;
		ctx.drawImage(sprite_sheet, 
						  x, // source x
                    y, // source y
                    map.tsize, // source width
                    map.tsize, // source height
                    row * map.tsize, // target x
						  col * map.tsize, // target y
                    map.tsize, // target width
                    map.tsize // target height
						  );
	}
}
	

function setUp() {
	var frame = document.getElementById('window');
	var ctx = frame.getContext('2d');
	for(var col = 0; col < map.cols; col++) {
		for(var row = 0; row < map.rows; row++) {
			var tile = map.getTile("water_tiles", col, row);
			map.drawTile(tile, col, row);
			tile = map.getTile("land_tiles", col, row);
			if(tile !== null) {
				map.drawTile(tile, col, row);
			}	
			tile = map.getTile("object_tiles", col, row);
			if(tile !== null) {
				map.drawTile(tile, col, row);
			}
		}	
	}
}
window.onload = setUp;