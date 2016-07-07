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
				  
	land_tiles: [ null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
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
				  
		object_tiles: [ 
					null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
					null, null, 195, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				  null, null, null, null, null, null, null, null, null, null, null, null,null, null, null, null, null, null, null, null, null, null, null, null, null,
				  null, null, null, null, null, null, null, null, null, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 188, null, null, null, null,
				  null, null, null, null, null, null, null, null, null, 3, 0, 1, 2, 1, 0, 1, 0, 1, 0, 1, null, null, 195, null, null,
				  null, null, null, null, null, null, null, 238, null, 0, 1, 0, 1, 0, 3, 0, 1, 0, 3, 0, null, null, null, null, null,
				  null, null, null, null, null, null, null, null, null, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, null, null, null, null, null,
				  null, null, null, 0, 1, 2, 1, 0, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 3, 0, null, null, null, null, null,
				  null, null, null, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 91, 92, 92, 93, 1, 0, 1, 0, 1, null, null, null,
				  null, null, null, 0, 1, 0, 1, 0, 3, 0, 1, 2, 1, 0, 51, 52, 100, 0, 1, 0, 1, 0, null, null, null,
				  null, null, null, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 51, 52, 100, 1, 0, 1, 0, 1, null, null, null, 
				  null, null, null, 0, 1, 0, 1, 0, 3, 0, 1, 21, 1, 0, 1, 92, 107, 0, 1, 0, 1, 0, null, null, null, 
				  null, null, null, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, null, null, null,
				  null, null, null, 0, 1, 0, 1, 0, 3, 2, 1, 2, 1, 0, 1, 0, 3, 0, 1, 0, 1, 0, null, null, null,
				  null, null, null, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, null, null, null, 
				  null, null, null, 0, 1, 0, 1, 0, 3, 0, 1, 2, 1, 0, 1, 0, 3, 0, 1, 0, 1, 3, null, null, null,
				  null, null, null, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 1, 0, 1, null, null, null,
				  null, null, null, 0, 1, 0, 1, 0, 3, 0, 1, 2, 1, 0, 1, 0, 3, 0, 2, 3, 1, 0, null, null, null,
				  null, null, null, null, 241, null, null, 188, null, null, null, null, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, null, null, null,
					null, null, null, null, null, null, null, null, null, null, null, null, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, null, null, null,
				  null, null, 239, null, null, null, null, null, null, null, null, null, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, null, null, null,
				  null, null, null, null, null, null, null, null, null, null, null, null, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, null, null, null,
				  null, null, null, null, null, 195, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				  null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 238, null,
				  null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	
	getTile: function(arr, row, col){
		if(arr === "water") {
			return this.water_tiles[row * map.cols + col];
		} else if(arr === "land") {
			return this.land_tiles[row * map.cols + col];
		} else if(arr === "object") {
			return this.object_tiles[row * map.cols + col];
		}
		
	},
	
	// tile: number
	//row and column: specify the desired location of the tile
	drawTile: function(tile, col, row) {
		var frame = document.getElementById('window');
		var ctx = frame.getContext('2d');
		// find source row and column position
		var r = Math.floor(tile / 7);
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
			var tile = map.getTile("water", col, row);
			map.drawTile(tile, col, row);
			tile = map.getTile("land", col, row);
			if(tile !== null) {
				map.drawTile(tile, col, row);
			}	
			tile = map.getTile("object", col, row);
			if(tile !== null) {
				map.drawTile(tile, col, row);
			}
		}	
	}
}
window.onload = setUp;