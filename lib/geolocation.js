VNF.GeoPositionConverter = function() {
	
};

VNF.GeoPositionConverter.RADIUS = 6371000;

VNF.GeoPositionConverter.prototype = {
	toRad : function(decDegrees) {
		return decDegrees * Math.PI / 180;
	},
	getDistance : function(lng1, lat1, lng2, lat2) {
		var dLat = this.toRad(lat2 - lat1);
		var dLng = this.toRad(lng2 - lng1);
		var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2));
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		return c * VNF.GeoPositionConverter.RADIUS;
	},
	getDDLongitudeNotation : function(decDegrees) {
		if(decDegrees < 0)
			return "W";
		return "E";
	},
	getDDLatitudeNotation : function(decDegrees) {
		if(decDegrees < 0)
			return "S";
		return "N";
	},
	getDDLongitude : function(decDegrees) {
		var dd = this.toDD(decDegrees);
		return dd.degrees + "° " + dd.minutes + "' " + dd.seconds + "\" " + this.getDDLongitudeNotation(decDegrees);
	},
	getDDLatitude : function(decDegrees) {
		var dd = this.toDD(decDegrees);
		return dd.degrees + "° " + dd.minutes + "' " + dd.seconds + "\" " + this.getDDLatitudeNotation(decDegrees);
	},
	toDD : function(decDegrees) {
		var dd = {};
		decDegrees = Math.abs(decDegrees);
		dd.degrees = Math.floor(decDegrees);
		dd.minutes = Math.floor(decDegrees * 60) % 60;
		dd.seconds = Math.round(10 * ((decDegrees * 3600) % 60)) / 10;
		return dd;
	}
};
