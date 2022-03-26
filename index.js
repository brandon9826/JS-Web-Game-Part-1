function newImage (imgSrc, fixedLeft, fixedBottom, itemFalsey, imgwidth) {
    let item = document.createElement('img')
    item.src = imgSrc
    item.style.position = 'fixed'
    item.style.left = String(fixedLeft) + "px"
    item.style.bottom = fixedBottom
    document.body.append(item)
    return item
}
function newItem (imgSrc, fixedLeft, fixedBottom)
{
    let object = newImage(imgSrc,fixedLeft,fixedBottom)
    object.addEventListener("dblclick", () => {
        object.remove()
    })
}
//function calls//-----------------------------------------
newImage('assets/green-character.gif', 100,'100px')
newImage('assets/pine-tree.png', 450,'200px')
newImage("assets/tree.png", 200, "300px")
newImage("assets/pillar.png", 350, "100px")
newImage("assets/crate.png", 150, "200px")
newImage("assets/well.png",500, "425px")
//Clickable Images //----------------------------
newItem("assets/sword.png", 500, "405px")
newItem("assets/shield.png", 165, "185px")
newItem("assets/staff.png", 600, "100px")


