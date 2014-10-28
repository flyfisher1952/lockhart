// JScript File
<!-- Please, request sign up for your own GMAP KEY at http://www.google.com/apis/maps/signup.html and replace 'GMAPKEY' entry with generated key in the line below. -->
<!-- <script src="http://maps.google.com/maps?file=api&amp;v=1&amp;key=GMAPKEY" type="text/javascript"></script> -->
<script src="http://maps.google.com/maps?file=api&v=1&key=ABQIAAAA4syzUHWtr7f8_aB54cA18BQT4ra6KyzCGfJR21oWkXjwTfMidBSdfdy4C4ykpRBnRkMYMv5EgcpwNA" type="text/javascript"></script>
<script src="http://www.mapbuilder.net/maps?UserName=Andrew&Map=3&SideBar=Right" type="text/javascript"></script>
<script type="text/javascript">
	//<![CDATA[
	
	// Global Variables
	// set map variable
	var map = "";
	//set up array of locations
	var aLocations = new Array;
	// Storage for sidebar list
	var listNodeContent = "";
	
	// Create MabBuilder's "tiny" red marker icon
	var iconsm = new GIcon();
	iconsm.image = "http://labs.google.com/ridefinder/images/mm_20_red.png";
	iconsm.shadow = "http://labs.google.com/ridefinder/images/mm_20_shadow.png";
	iconsm.iconSize = new GSize(12, 20);
	iconsm.shadowSize = new GSize(20, 18);
	iconsm.iconAnchor = new GPoint(6, 20);
	iconsm.infoWindowAnchor = new GPoint(5, 1);
	
	// Create MabBuilder's "big" marker icon
	var iconbig = new GIcon();
	iconbig.image = "http://www.google.com/mapfiles/marker.png";
	iconbig.shadow = "http://www.google.com/mapfiles/shadow50.png";
	iconbig.iconSize = new GSize(20, 34);
	iconbig.shadowSize = new GSize(37, 34);
	iconbig.iconAnchor = new GPoint(6, 34);
	iconbig.infoWindowAnchor = new GPoint(5, 1);


	function onLoad() {
		map = new GMap(document.getElementById("MapBuilderMap"));
		MapBuilder = new MapBuilder();
		map.addMapBuilder(MapBuilder);
		// Map type: map, satellite, hybrid
		map.setMapType(map.getMapTypes()[2]);
		map.addControl(new GLargeMapControl());
		map.addControl(new GMapTypeControl());
		// Center the map to the default location
		map.centerAndZoom(new GPoint(-111.97639, 41.687496), 1);
  
		// Add locations
		
		var point = new GPoint(-111.97639, 41.687496);
		var footerHtml = "<div id=\"MapBuilderIWFooter\"><h1><a href=\"#\" onclick=\"ZoomMapTo(0)\">Zoom To</a></h1></div>";
		
		// Define Marker
		iconsm.image = "http://www.mapbuilder.net/img/icons/marker_20_red.png";
		var InfoHTML = "<div id=\"MapBuilderIW\"><h1>Altoona</h1><div id=\"MapBuilderIWContent\">Our House on Cobblestone</div>" + footerHtml + "</div>";
		var marker = createMarker(point, InfoHTML, iconsm);
		map.addOverlay(marker);
		aLocations[0] = new Array(marker, "The Lockhart Home on Cobblestone", InfoHTML, point);
		
		// And finnaly create sidebar
		createSideBar();
		// Store sidebar
		listNodeContent = document.getElementById("LocationList").innerHTML;
	}

//]]>
</script>

