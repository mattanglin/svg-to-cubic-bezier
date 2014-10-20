svg-to-cubic-bezier
===================

JavaScript function to convert SVG paths to array of cubic bezier points for path animation with [GSAP](https://greensock.com/gsap).

Created this so I could easily animate along paths created in Illustrator exported as SVG.

## Usage
 - Create svg with path you want to animate on
 - Run the function on the SVG path
 - Plug result into Greensock animation function (Make sure you're using TweenMax or have included the BezierPlugin)

See [GreenSockJS BezierPlugin](https://greensock.com/BezierPlugin-JS) for more information about Greensock animation library.

 - Currently lacking support for regular and shorthand quadratic curves, elliptical arcs, and closures.


