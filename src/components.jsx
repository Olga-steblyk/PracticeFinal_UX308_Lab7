import {fahr2cel, hello, sqft2acre, lawncutting, airqualityindex, yeeha, slopecal} from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2(){
    return <section>
2. Write a function that converts from fahrenheit to celcius
<h2>Results</h2>
<p> fahrenheit2celcius(32) == "{fahr2cel(32)}"</p>
<p> fahrenheit2celcius(70) == "{fahr2cel(70)}"</p>
<p> fahrenheit2celcius(212) == "{fahr2cel(212)}"</p>
    </section>;
}

function Question3(){
    return <section>
Given the&nbsp; width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn. Test at least 3 lawn sizes
<h2>Results</h2>
<p> sqft2acre(32) == "{sqft2acre(32)}"</p>
<p> sqft2acre(43560) == "{sqft2acre(43560)}"</p>
<p> sqft2acre(87120) == "{sqft2acre(87120)}"</p>
    </section>;
}

function Question4(){
    return <section>
4. Compute the air quality given an air quality index:
<h2>Results</h2>
<p> lawncutting(32,11,0) == "{lawncutting(32,11,2)}"</p>
<p> lawncutting(32,11,0) == "{lawncutting(32,11,4)}"</p>
<p> lawncutting(32,11,0) == "{lawncutting(32,11,3)}"</p>
    </section>;
}

function Question5(){
    return <section>
4. Compute the air quality given an air quality index:
<h2>Results of Air Quality Index</h2>
<p> airqualityindex(40) == "{airqualityindex(40)}"</p>
<p> airqualityindex(70) == "{airqualityindex(50)}"</p>
<p> airqualityindex(25) == "{airqualityindex(124)}"</p>
<p> airqualityindex(40) == "{airqualityindex(178)}"</p>
<p> airqualityindex(70) == "{airqualityindex(214)}"</p>
<p> airqualityindex(25) == "{airqualityindex(390)}"</p>
    </section>;
}

function Question6(){
    return <section>
5. yee_ha takes an integer parameter and returns a string
<h2>Results of the Yeeha</h2>
<p> yeeha(21) == "{yeeha(21)}"</p>
<p> yeeha(27) == "{yeeha(27)}"</p>
<p> yeeha(14) == "{yeeha(14)}"</p>
<p> yeeha(10) == "{yeeha(10)}"</p>
    </section>;
}

function Question7(){
    return <section>
5. yee_ha takes an integer parameter and returns a string
<h2>Results of the Yeeha</h2>
<p> slopecal(1,2,3,4) == "{slopecal(1,2,3,4)}"</p>
<p> slopecal(2,2,6,8) == "{slopecal(2,2,6,8)}"</p>
<p> slopecal(5,6,8,9) == "{slopecal(5,6,6,9)}"</p>
<p> slopecal(3,5,7,9) == "{slopecal(3,5,7,9)}"</p>
    </section>;
}



export {Question1, Question2, Question3, Question4, Question5, Question6, Question7}
