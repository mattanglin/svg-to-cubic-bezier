convertToCubicBezier = function(path) {
  var x,y,x1,y1,x2,y2,
      x0,y0,
      bezier = [],
      segs = path.pathSegList;

  for (var i=0,len=segs.numberOfItems;i<len;++i){
    var seg = segs.getItem(i), c=seg.pathSegTypeAsLetter;
    switch(c) {
      // Move
      case 'M':
        x = x1 = x2 = 0;
        y = y1 = y2 = 0;
        x0 = seg.x;
        y0 = seg.y;
        bezier.push({x:0,y:0});
        break;
      case 'm':
        // Have not seen this in a path, yet
        break;
      // Line segment
      case 'L':
        bezier.push({x:x,y:y});
        bezier.push({x:(seg.x - x0),y:(seg.y - y0)});
        bezier.push({x:(seg.x - x0),y:(seg.y - y0)});;
        x = bezier[bezier.length-1].x;
        y = bezier[bezier.length-1].y;
        x1 = bezier[bezier.length-3].x;
        y1 = bezier[bezier.length-3].y;
        x2 = bezier[bezier.length-2].x;
        y2 = bezier[bezier.length-2].y;
        break;
      case 'l':
        bezier.push({x:x,y:y});
        bezier.push({x:(x+seg.x),y:(y+seg.y)});
        bezier.push({x:(x+seg.x),y:(y+seg.y)});;
        x = bezier[bezier.length-1].x;
        y = bezier[bezier.length-1].y;
        x1 = bezier[bezier.length-3].x;
        y1 = bezier[bezier.length-3].y;
        x2 = bezier[bezier.length-2].x;
        y2 = bezier[bezier.length-2].y;
        break;
      // Cubic
      case 'C':
        bezier.push({x:(seg.x1 - x0),y:(seg.y1 - y0)});
        bezier.push({x:(seg.x2 - x0),y:(seg.y2 - y0)});
        bezier.push({x:(seg.x - x0),y:(seg.y - y0)});

        x = bezier[bezier.length-1].x;
        y = bezier[bezier.length-1].y;
        x1 = bezier[bezier.length-3].x;
        y1 = bezier[bezier.length-3].y;
        x2 = bezier[bezier.length-2].x;
        y2 = bezier[bezier.length-2].y;
        break;
      case 'c':
        bezier.push({x:(x+seg.x1),y:(y+seg.y1)})
        bezier.push({x:(x+seg.x2),y:(y+seg.y2)});
        bezier.push({x:(x+seg.x),y:(y+seg.y)});;

        x = bezier[bezier.length-1].x;
        y = bezier[bezier.length-1].y;
        x1 = bezier[bezier.length-3].x;
        y1 = bezier[bezier.length-3].y;
        x2 = bezier[bezier.length-2].x;
        y2 = bezier[bezier.length-2].y;
        break;
      // Smooth
      case 'S':
        bezier.push({x:((x+(x-x2))),y:((y+(y-y2)))});
        bezier.push({x:(seg.x2 - x0),y:(seg.y2 - y0)});
        bezier.push({x:(seg.x - x0),y:(seg.y - y0)});;
        
        x = bezier[bezier.length-1].x;
        y = bezier[bezier.length-1].y;
        x1 = bezier[bezier.length-3].x;
        y1 = bezier[bezier.length-3].y;
        x2 = bezier[bezier.length-2].x;
        y2 = bezier[bezier.length-2].y;
        break;
      case 's':
        bezier.push({x:(x+(x-x2)),y:(y+(y-y2))});
        bezier.push({x:(x+seg.x2),y:(y+seg.y2)});
        bezier.push({x:(x+seg.x),y:(y+seg.y)});;
        x = bezier[bezier.length-1].x;
        y = bezier[bezier.length-1].y;
        x1 = bezier[bezier.length-3].x;
        y1 = bezier[bezier.length-3].y;
        x2 = bezier[bezier.length-2].x;
        y2 = bezier[bezier.length-2].y;
        break;
      // Quadratic
      case 'Q':
        break;
      case 'q':
        break;

      // Horizontal
      case 'H':
        bezier.push({x:x,y:y});
        bezier.push({x:(seg.x-x0),y:y});
        bezier.push({x:(seg.x-x0),y:y});
        x = bezier[bezier.length-1].x;
        y = bezier[bezier.length-1].y;
        x1 = bezier[bezier.length-3].x;
        y1 = bezier[bezier.length-3].y;
        x2 = bezier[bezier.length-2].x;
        y2 = bezier[bezier.length-2].y;
        break;
      case 'h':
        bezier.push({x:x,y:y});
        bezier.push({x:(seg.x+x),y:y});
        bezier.push({x:(seg.x+x),y:y});
        x = bezier[bezier.length-1].x;
        y = bezier[bezier.length-1].y;
        x1 = bezier[bezier.length-3].x;
        y1 = bezier[bezier.length-3].y;
        x2 = bezier[bezier.length-2].x;
        y2 = bezier[bezier.length-2].y;
        break;
      // Vertical
      case 'V':
        bezier.push({x:x,y:y});
        bezier.push({x:x,y:(seg.y-y0)});
        bezier.push({x:x,y:(seg.y-y0)});
        x = bezier[bezier.length-1].x;
        y = bezier[bezier.length-1].y;
        x1 = bezier[bezier.length-3].x;
        y1 = bezier[bezier.length-3].y;
        x2 = bezier[bezier.length-2].x;
        y2 = bezier[bezier.length-2].y;
        break;
      case 'v':
        bezier.push({x:x,y:y});
        bezier.push({x:x,y:(seg.y+y)});
        bezier.push({x:x,y:(seg.y+y)});
        x = bezier[bezier.length-1].x;
        y = bezier[bezier.length-1].y;
        x1 = bezier[bezier.length-3].x;
        y1 = bezier[bezier.length-3].y;
        x2 = bezier[bezier.length-2].x;
        y2 = bezier[bezier.length-2].y;
        break;
      // Close
      case 'Z': 
        break;
      case 'z': 
        break;


      case 't': 
      case 'a': 
    }
  }

  return bezier;
}

