// JScript File
var ix = 0;
var images = new Array(21);
images[0] = "../../images/mendon/better.front.2005.jpg";
images[1] = "../../images/mendon/back-of-house.jpg";
images[2] = "../../images/mendon/back.2005.jpg";
images[3] = "../../images/mendon/basement.2005.jpg";
images[4] = "../../images/mendon/basement.jpg";
images[5] = "../../images/mendon/bathroom.2005.jpg";
images[6] = "../../images/mendon/better.back.of.house.jpg";
images[7] = "../../images/mendon/better.front.2005.jpg";
images[8] = "../../images/mendon/dinning.2005.jpg";
images[9] = "../../images/mendon/entry.2005.jpg";
images[10] = "../../images/mendon/front-porch-view.jpg";
images[11] = "../../images/mendon/front.2005.jpg";
images[12] = "../../images/mendon/garage.2005.jpg";
images[13] = "../../images/mendon/house-1.jpg";
images[14] = "../../images/mendon/kitchen.2005.jpg";
images[15] = "../../images/mendon/living.2005.jpg";
images[16] = "../../images/mendon/ne-view.jpg";
images[17] = "../../images/mendon/office.2005.jpg";
images[18] = "../../images/mendon/se-view.jpg";
images[19] = "../../images/mendon/xmas-tree.jpg";
images[20] = "../../images/mendon/zacs.bdrm.2005.jpg";

function DisplayPicture(increment) {
	ix += increment;
	if (ix < 0)
		ix = images.length - 1;
	else if (ix >= images.length)
		ix = 0;

	$('#myImage').attr('src', images[ix]);
};


